import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, phone, eventType, attendees, date, message } = body;

    // Validate required fields
    if (!name || !company || !email || !eventType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to Dubai Mall events team
    await resend.emails.send({
      from: 'Dubai Mall Deck <onboarding@resend.dev>',
      to: process.env.EVENTS_EMAIL || 'events@dubaimall.com',
      reply_to: email,
      subject: `New Event Booking Enquiry: ${eventType}`,
      html: `
        <h2>New Event Booking Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Event Type:</strong> ${eventType}</p>
        <p><strong>Expected Attendees:</strong> ${attendees || 'Not specified'}</p>
        <p><strong>Preferred Date:</strong> ${date || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No additional message'}</p>
      `,
    });

    // Send confirmation email to prospect
    await resend.emails.send({
      from: 'Dubai Mall <noreply@dubaimall.com>',
      to: email,
      subject: 'We Received Your Event Booking Enquiry',
      html: `
        <h2>Thank You, ${name}!</h2>
        <p>We've received your event booking enquiry for <strong>${eventType}</strong>.</p>
        <p>Our events team will contact you within 24 hours to discuss your event requirements and available dates.</p>
        <p>We look forward to hosting your event at The Dubai Mall!</p>
        <p>Best regards,<br/>The Dubai Mall Events Team</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Event enquiry submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Events form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit event enquiry' },
      { status: 500 }
    );
  }
}

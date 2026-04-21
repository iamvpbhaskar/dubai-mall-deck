import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, category, size, message } = body;

    // Validate required fields
    if (!name || !company || !email || !category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to Dubai Mall team
    await resend.emails.send({
      from: 'Dubai Mall Deck <onboarding@resend.dev>',
      to: process.env.LEASING_EMAIL || 'leasing@dubaimall.com',
      reply_to: email,
      subject: `New Leasing Enquiry: ${category}`,
      html: `
        <h2>New Leasing Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Desired Size:</strong> ${size || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No additional message'}</p>
      `,
    });

    // Send confirmation email to prospect
    await resend.emails.send({
      from: 'Dubai Mall <noreply@dubaimall.com>',
      to: email,
      subject: 'We Received Your Leasing Enquiry',
      html: `
        <h2>Thank You, ${name}!</h2>
        <p>We've received your leasing enquiry for <strong>${category}</strong>.</p>
        <p>Our leasing team will contact you within 24 hours to discuss your requirements.</p>
        <p>In the meantime, feel free to explore more about The Dubai Mall.</p>
        <p>Best regards,<br/>The Dubai Mall Team</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Enquiry submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Leasing form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit enquiry' },
      { status: 500 }
    );
  }
}

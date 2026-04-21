import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, budget, tier, vision } = body;

    // Validate required fields
    if (!name || !company || !email || !tier) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to Dubai Mall team
    await resend.emails.send({
      from: 'Dubai Mall Deck <onboarding@resend.dev>',
      to: process.env.SPONSORSHIP_EMAIL || 'partnerships@dubaimall.com',
      reply_to: email,
      subject: `New Sponsorship Enquiry: ${tier}`,
      html: `
        <h2>New Sponsorship Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sponsorship Tier:</strong> ${tier}</p>
        <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Brand Vision:</strong></p>
        <p>${vision || 'No additional details'}</p>
      `,
    });

    // Send confirmation email to prospect
    await resend.emails.send({
      from: 'Dubai Mall <noreply@dubaimall.com>',
      to: email,
      subject: 'We Received Your Sponsorship Enquiry',
      html: `
        <h2>Thank You, ${name}!</h2>
        <p>We've received your sponsorship enquiry for the <strong>${tier}</strong> tier.</p>
        <p>Our partnerships team will contact you within 24 hours to discuss partnership opportunities and customized activation strategies.</p>
        <p>We're excited about the potential to collaborate with your brand!</p>
        <p>Best regards,<br/>The Dubai Mall Partnerships Team</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Sponsorship enquiry submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Sponsorship form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit sponsorship enquiry' },
      { status: 500 }
    );
  }
}

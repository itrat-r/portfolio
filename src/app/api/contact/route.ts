import { NextResponse } from 'next/server';
import connectDB, { ContactMessage } from '@/lib/mongodb';
import { sendEmail, formatContactEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Try to save to database if configured
    const conn = await connectDB();
    if (conn) {
      await ContactMessage.create({ name, email, subject, message });
    }

    // Send email notification
    const contactEmail = process.env.CONTACT_EMAIL || 'itrat.r16@gmail.com';
    const { text, html } = formatContactEmail({ name, email, subject, message });

    await sendEmail({
      to: contactEmail,
      subject: `Portfolio Contact: ${subject}`,
      text,
      html,
    });

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const conn = await connectDB();

    if (!conn) {
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 500 }
      );
    }

    const messages = await ContactMessage.find({})
      .sort({ createdAt: -1 })
      .limit(50);

    return NextResponse.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}

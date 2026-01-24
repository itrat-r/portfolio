import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmail({ to, subject, text, html }: EmailOptions) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('SMTP credentials not configured, skipping email send');
    return { success: false, error: 'Email not configured' };
  }

  try {
    const info = await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text,
      html: html || text,
    });

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error: 'Failed to send email' };
  }
}

export function formatContactEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const text = `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}
`;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #374151; }
    .message-box { background: white; padding: 15px; border: 1px solid #e5e7eb; border-radius: 6px; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">New Contact Form Submission</h2>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name:</span> ${data.name}
      </div>
      <div class="field">
        <span class="label">Email:</span> <a href="mailto:${data.email}">${data.email}</a>
      </div>
      <div class="field">
        <span class="label">Subject:</span> ${data.subject}
      </div>
      <div class="field">
        <span class="label">Message:</span>
        <div class="message-box">${data.message.replace(/\n/g, '<br>')}</div>
      </div>
    </div>
  </div>
</body>
</html>
`;

  return { text, html };
}

import { NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const sesClient = new SESClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY ? {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  } : undefined,
});

function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    const sourceEmail = process.env.VERIFIED_SENDER_EMAIL || '';
    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.VERIFIED_SENDER_EMAIL || '';
    if (!sourceEmail || !toEmail) {
      return NextResponse.json({ error: 'Email environment variables are not configured' }, { status: 500 });
    }

    const text = `
Resume Request

From: ${email}
Message: ${message || '(none)'}

This message was sent from your portfolio contact form.
`;

    const command = new SendEmailCommand({
      Source: sourceEmail,
      Destination: { ToAddresses: [toEmail] },
      Message: {
        Subject: { Data: 'New Resume Request' },
        Body: { Text: { Data: text } },
      },
      ReplyToAddresses: [email],
    });

    await sesClient.send(command);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}



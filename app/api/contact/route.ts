import { NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const sesClient = new SESClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
});

function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function isSpam(message: string): boolean {
  const spamWords = [
    'viagra', 'casino', 'lottery', 'bitcoin', 'crypto',
    'investment', 'loan', 'mortgage', 'free money',
    'earn fast', 'work from home', 'make money fast',
    'click here', 'buy now', 'discount', 'offer',
    'limited time', 'act now', 'urgent', 'important message'
  ];
  
  return spamWords.some(word => message.toLowerCase().includes(word));
}

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    if (isSpam(message)) {
      return NextResponse.json(
        { error: 'Message contains spam content' },
        { status: 400 }
      );
    }

    const emailParams = {
      Source: process.env.VERIFIED_SENDER_EMAIL || '',
      Destination: {
        ToAddresses: ['aprameyakannan@gmail.com'],
      },
      Message: {
        Subject: {
          Data: 'New Resume Request',
        },
        Body: {
          Text: {
            Data: `
New Resume Request

From: ${email}
Message: ${message}

This is an automated message from your portfolio website.
            `,
          },
        },
      },
    };

    const command = new SendEmailCommand(emailParams);
    await sesClient.send(command);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 
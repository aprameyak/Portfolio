import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    hasAccessKey: !!process.env.AWS_ACCESS_KEY_ID,
    hasSecretKey: !!process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    hasSenderEmail: !!process.env.VERIFIED_SENDER_EMAIL,
    senderEmail: process.env.VERIFIED_SENDER_EMAIL
  });
} 
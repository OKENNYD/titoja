import { NextResponse } from 'next/server';

export async function GET() {
    const offers = ["Blind Box", "Mystery Box", "Black Friday", "Annivasary"]
  try {
    return NextResponse.json(offers);
  } catch (error) {
    console.error('Error fetching the offers:', error);
    return NextResponse.json({ error: 'Failed to fetch the offers' }, { status: 500 });
  }
}
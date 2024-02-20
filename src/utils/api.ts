import { NextResponse } from 'next/server';

export function ErrorHandler(error: string, status: number) {
  return NextResponse.json({ error }, { status });
}

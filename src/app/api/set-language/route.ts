// app/api/set-language/route.ts
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { language } = await req.json();
    const cookieStore = await cookies()

    cookieStore.set('language', language, { path: '/' });

    return NextResponse.json({ success: true });
}

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch(
      'https://bank.hackclub.com/api/v3/organizations/stevenson-highschool-forge-club',
      {
        // Revalidate every hour (3600s) to keep data fresh without overloading HCB
        next: { revalidate: 3600 }, 
      }
    );

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
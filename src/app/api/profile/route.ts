import { NextResponse } from 'next/server';
import connectDB, { Profile } from '@/lib/mongodb';
import { profileData } from '@/data/profile';

export async function GET() {
  try {
    const conn = await connectDB();

    if (!conn) {
      // Return static data if MongoDB is not configured
      return NextResponse.json(profileData);
    }

    const profile = await Profile.findOne({});

    if (!profile) {
      // Return static data if no profile exists in DB
      return NextResponse.json(profileData);
    }

    return NextResponse.json(profile);
  } catch (error) {
    console.error('Error fetching profile:', error);
    // Fallback to static data on error
    return NextResponse.json(profileData);
  }
}

export async function POST(request: Request) {
  try {
    const conn = await connectDB();

    if (!conn) {
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();

    // Upsert the profile (create or update)
    const profile = await Profile.findOneAndUpdate({}, body, {
      new: true,
      upsert: true,
    });

    return NextResponse.json(profile, { status: 200 });
  } catch (error) {
    console.error('Error saving profile:', error);
    return NextResponse.json(
      { error: 'Failed to save profile' },
      { status: 500 }
    );
  }
}

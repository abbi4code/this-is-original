import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    // Test database connection by trying to count users
    const userCount = await prisma.user.count();
    
    return NextResponse.json({
      message: 'Database connection successful',
      userCount: userCount,
      status: 'connected'
    });
  } catch (error: any) {
    console.error('Database test error:', error);
    
    return NextResponse.json({
      error: 'Database connection failed',
      details: error.message,
      status: 'disconnected'
    }, { status: 500 });
  }
} 
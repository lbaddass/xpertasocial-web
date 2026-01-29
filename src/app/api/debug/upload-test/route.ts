import { NextResponse } from 'next/server';
import { uploadFile, getReport } from '@/lib/r2';

export async function GET() {
  const jobId = 'test-job';
  const testKey = `reports/${jobId}.json`;
  const testBody = JSON.stringify({ message: 'Hello from Vercel to R2!', timestamp: new Date() });

  try {
    // Upload a test object
    await uploadFile(testKey, testBody, 'application/json');

    // Get the object back
    const retrievedBody = await getReport(jobId);

    return NextResponse.json({
      success: true,
      message: 'Successfully uploaded and retrieved a test object from R2.',
      retrievedObject: retrievedBody,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'An error occurred during the R2 test.',
      error: error instanceof Error ? error.message : String(error),
    }, { status: 500 });
  }
}

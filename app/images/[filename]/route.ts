import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { NextResponse } from 'next/server';
import { imageAssetMap } from '@/lib/image-assets';

interface RouteContext {
  params: {
    filename: string;
  };
}

export async function GET(_request: Request, { params }: RouteContext) {
  const sourceName = imageAssetMap[params.filename];

  if (!sourceName) {
    return NextResponse.json({ error: 'Image not found' }, { status: 404 });
  }

  const assetPath = join(
    process.cwd(),
    '..',
    '..',
    '.cursor',
    'projects',
    'c-Users-PC-Desktop-Ecogen',
    'assets',
    sourceName
  );

  let image: Buffer;

  try {
    image = await readFile(assetPath);
  } catch {
    return NextResponse.json({ error: 'Image asset unavailable' }, { status: 404 });
  }

  return new NextResponse(new Uint8Array(image), {
    headers: {
      'Cache-Control': 'no-store',
      'Content-Type': 'image/png'
    }
  });
}

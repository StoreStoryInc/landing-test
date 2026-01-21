import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    const logosDir = path.join(process.cwd(), 'public', 'socialProof_logos');

    try {
        const files = fs.readdirSync(logosDir);
        const imageFiles = files.filter(file =>
            /\.(png|jpg|jpeg|svg|webp)$/i.test(file)
        );

        const logos = imageFiles.map(file => ({
            src: `/socialProof_logos/${file}`,
            alt: path.parse(file).name,
        }));

        return NextResponse.json(logos);
    } catch {
        return NextResponse.json([]);
    }
}

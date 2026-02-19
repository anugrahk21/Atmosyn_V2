/**
 * Image Optimization Script
 * Converts oversized JPG/PNG images to WebP format
 * Resizes images that are larger than needed
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '..', 'public');

// Images to convert with optional max width
const imagesToConvert = [
    // Hero image (LCP critical!) - resize to 1400px wide max
    { src: 'assets/img/hero/hero-1-1.jpg', maxWidth: 1400, quality: 82 },

    // Service images - resize to 800px wide (they display in a tab section)
    { src: 'assets/img/service/1.png', maxWidth: 800, quality: 80 },
    { src: 'assets/img/service/2.png', maxWidth: 800, quality: 80 },
    { src: 'assets/img/service/3.png', maxWidth: 800, quality: 80 },
    { src: 'assets/img/service/4.png', maxWidth: 800, quality: 80 },
    { src: 'assets/img/service/5.png', maxWidth: 800, quality: 80 },

    // Skill/about image
    { src: 'assets/img/others/skill1-1.jpg', maxWidth: 1200, quality: 80 },

    // Project images
    { src: 'assets/img/project/project_3_2.png', maxWidth: 1200, quality: 80 },
    { src: 'assets/img/project/project_1_2.png', maxWidth: 1200, quality: 80 },
    { src: 'assets/img/project/project_2_2.png', maxWidth: 1200, quality: 80 },
    { src: 'assets/img/project/project_1_1.png', maxWidth: 1200, quality: 80 },

    // Blog images > 400KB
    { src: 'assets/img/blog/bg_3/3-1.png', maxWidth: 1000, quality: 80 },
    { src: 'assets/img/blog/bg_8/8-3.png', maxWidth: 1000, quality: 80 },
    { src: 'assets/img/blog/bg_9/sb-4.png', maxWidth: 1000, quality: 80 },
    { src: 'assets/img/blog/bg_8/sb-2.png', maxWidth: 1000, quality: 80 },
    { src: 'assets/img/blog/bg_8/sb-4.png', maxWidth: 1000, quality: 80 },
    { src: 'assets/img/blog/bg_8/sb-1.png', maxWidth: 1000, quality: 80 },
    { src: 'assets/img/blog/bg_6/6-3.png', maxWidth: 1000, quality: 80 },

    // Background image
    { src: 'assets/img/bg/pricing-card-bg.png', maxWidth: 800, quality: 75 },
];

async function convertImage({ src, maxWidth, quality }) {
    const inputPath = path.join(publicDir, src);

    if (!fs.existsSync(inputPath)) {
        console.log(`⚠️  SKIP (not found): ${src}`);
        return null;
    }

    const ext = path.extname(src);
    const outputPath = inputPath.replace(ext, '.webp');
    const originalSize = fs.statSync(inputPath).size;

    try {
        let pipeline = sharp(inputPath);

        // Get metadata for resize decision
        const metadata = await pipeline.metadata();

        // Only resize if image is wider than maxWidth
        if (metadata.width && metadata.width > maxWidth) {
            pipeline = pipeline.resize(maxWidth, null, {
                withoutEnlargement: true,
                fit: 'inside'
            });
        }

        // Convert to WebP
        await pipeline
            .webp({ quality: quality || 80 })
            .toFile(outputPath);

        const newSize = fs.statSync(outputPath).size;
        const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

        console.log(`✅ ${src}`);
        console.log(`   ${(originalSize / 1024).toFixed(0)} KB → ${(newSize / 1024).toFixed(0)} KB (${savings}% savings)`);
        console.log(`   ${metadata.width}x${metadata.height} → ${Math.min(metadata.width, maxWidth)}px wide`);

        return { src, originalSize, newSize, savings };
    } catch (err) {
        console.error(`❌ ERROR: ${src} - ${err.message}`);
        return null;
    }
}

async function main() {
    console.log('🖼️  Starting image optimization...\n');

    let totalOriginal = 0;
    let totalNew = 0;
    let converted = 0;

    for (const img of imagesToConvert) {
        const result = await convertImage(img);
        if (result) {
            totalOriginal += result.originalSize;
            totalNew += result.newSize;
            converted++;
        }
    }

    console.log('\n' + '='.repeat(50));
    console.log(`📊 Summary: ${converted} images converted`);
    console.log(`   Total: ${(totalOriginal / 1024 / 1024).toFixed(1)} MB → ${(totalNew / 1024 / 1024).toFixed(1)} MB`);
    console.log(`   Saved: ${((totalOriginal - totalNew) / 1024 / 1024).toFixed(1)} MB (${((1 - totalNew / totalOriginal) * 100).toFixed(1)}%)`);
    console.log('='.repeat(50));
    console.log('\n⚡ Next: Update code references from .jpg/.png to .webp');
}

main().catch(console.error);

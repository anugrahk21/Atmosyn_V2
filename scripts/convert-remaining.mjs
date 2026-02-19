/**
 * Batch convert ALL remaining PNG/JPG images to WebP
 * Targets: blog, project, hero, others, bg folders
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '..', 'public', 'assets', 'img');

async function convertFile(filePath, quality = 80) {
    const ext = path.extname(filePath);
    const webpPath = filePath.replace(ext, '.webp');

    // Skip if webp already exists
    if (fs.existsSync(webpPath)) {
        return null;
    }

    const originalSize = fs.statSync(filePath).size;

    try {
        await sharp(filePath)
            .webp({ quality })
            .toFile(webpPath);

        const newSize = fs.statSync(webpPath).size;
        const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
        const relPath = path.relative(publicDir, filePath);
        console.log(`✅ ${relPath}: ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB (${savings}%)`);
        return { originalSize, newSize };
    } catch (err) {
        console.error(`❌ ${path.relative(publicDir, filePath)}: ${err.message}`);
        return null;
    }
}

async function walkDir(dir) {
    const results = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results.push(...await walkDir(fullPath));
        } else if (/\.(png|jpg|jpeg)$/i.test(entry.name)) {
            results.push(fullPath);
        }
    }
    return results;
}

async function main() {
    // Target directories
    const dirs = ['blog', 'project', 'hero', 'others', 'bg'];

    let totalOriginal = 0;
    let totalNew = 0;
    let count = 0;

    for (const dir of dirs) {
        const dirPath = path.join(publicDir, dir);
        if (!fs.existsSync(dirPath)) continue;

        console.log(`\n📁 Processing ${dir}/...`);
        const files = await walkDir(dirPath);

        for (const file of files) {
            const result = await convertFile(file);
            if (result) {
                totalOriginal += result.originalSize;
                totalNew += result.newSize;
                count++;
            }
        }
    }

    console.log('\n' + '='.repeat(50));
    console.log(`📊 Converted ${count} additional images`);
    if (count > 0) {
        console.log(`   ${(totalOriginal / 1024 / 1024).toFixed(1)} MB → ${(totalNew / 1024 / 1024).toFixed(1)} MB`);
        console.log(`   Saved: ${((totalOriginal - totalNew) / 1024 / 1024).toFixed(1)} MB`);
    }
    console.log('='.repeat(50));
}

main().catch(console.error);

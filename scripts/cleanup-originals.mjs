/**
 * Remove original PNG/JPG files that now have WebP replacements
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '..', 'public', 'assets', 'img');

function walkDir(dir) {
    const results = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results.push(...walkDir(fullPath));
        } else if (/\.(png|jpg|jpeg)$/i.test(entry.name)) {
            results.push(fullPath);
        }
    }
    return results;
}

const dirs = ['blog', 'project', 'hero', 'others', 'bg'];
let deletedCount = 0;
let savedBytes = 0;

for (const dir of dirs) {
    const dirPath = path.join(publicDir, dir);
    if (!fs.existsSync(dirPath)) continue;

    const files = walkDir(dirPath);
    for (const file of files) {
        const ext = path.extname(file);
        const webpPath = file.replace(ext, '.webp');

        if (fs.existsSync(webpPath)) {
            const size = fs.statSync(file).size;
            const relPath = path.relative(publicDir, file);
            fs.unlinkSync(file);
            console.log(`🗑️  Deleted: ${relPath} (${(size / 1024).toFixed(0)}KB)`);
            savedBytes += size;
            deletedCount++;
        }
    }
}

console.log(`\n✅ Deleted ${deletedCount} originals, saved ${(savedBytes / 1024 / 1024).toFixed(1)} MB`);

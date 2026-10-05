const sharp = require('sharp');
const fs = require('fs');

async function generateFavicons() {
  const src = 'public/yann-avatar.jpg';

  // Generate PNG sizes for manifest / apple-touch
  const pngSizes = [16, 32, 48, 64, 192, 256];
  for (const size of pngSizes) {
    await sharp(src)
      .resize(size, size)
      .png()
      .toFile('public/favicon-' + size + '.png');
    console.log('Generated favicon-' + size + '.png');
  }

  await sharp(src).resize(180, 180).png().toFile('public/apple-touch-icon.png');
  console.log('Generated apple-touch-icon.png');

  // Build ICO with 16, 32, 48 px embedded PNGs
  const png16 = await sharp(src).resize(16, 16).png().toBuffer();
  const png32 = await sharp(src).resize(32, 32).png().toBuffer();
  const png48 = await sharp(src).resize(48, 48).png().toBuffer();

  const images = [png16, png32, png48];
  const widths = [16, 32, 48];
  const numImages = images.length;
  const headerSize = 6;
  const entrySize = 16;
  const dirSize = headerSize + numImages * entrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(numImages, 4);

  let offset = dirSize;
  const entries = [];
  for (let i = 0; i < numImages; i++) {
    const entry = Buffer.alloc(entrySize);
    entry.writeUInt8(widths[i], 0);
    entry.writeUInt8(widths[i], 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(images[i].length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += images[i].length;
    entries.push(entry);
  }

  const icoBuffer = Buffer.concat([header, ...entries, ...images]);
  fs.writeFileSync('public/favicon.ico', icoBuffer);
  console.log('Generated favicon.ico (' + icoBuffer.length + ' bytes)');
}

generateFavicons().catch(console.error);

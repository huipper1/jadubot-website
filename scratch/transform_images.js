const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return [h * 360, s, l];
}

function hslToRgb(h, s, l) {
  h /= 360;
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

async function transformSelective(inputPath, outputPath, minHue, maxHue, targetHue) {
  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += info.channels) {
    const r = data[i], g = data[i+1], b = data[i+2];
    const [h, s, l] = rgbToHsl(r, g, b);
    if (h >= minHue && h <= maxHue && s > 0.08) {
      const [newR, newG, newB] = hslToRgb(targetHue, Math.min(1, s * 1.08), l);
      data[i] = newR;
      data[i+1] = newG;
      data[i+2] = newB;
    }
  }

  // Write to temporary file first then rename to handle atomic replace
  const tempOutput = outputPath + '.tmp.png';
  await sharp(data, { raw: info }).png().toFile(tempOutput);
  fs.renameSync(tempOutput, outputPath);
  console.log(`Transformed: ${outputPath}`);
}

async function transformHueModulate(inputPath, outputPath, hueShift) {
  const tempOutput = outputPath + '.tmp.png';
  await sharp(inputPath)
    .modulate({ hue: hueShift })
    .png()
    .toFile(tempOutput);
  fs.renameSync(tempOutput, outputPath);
  console.log(`Modulated: ${outputPath}`);
}

async function main() {
  const root = path.resolve(__dirname, '..');

  // 1. Service Hero Background (Interior pages hero)
  await transformSelective(
    path.join(root, 'public/assets/images/service/hero-bg.png'),
    path.join(root, 'public/assets/images/service/hero-bg.png'),
    235, 315, 214
  );

  // 2. Home Hero Background Grid Tiles
  await transformSelective(
    path.join(root, 'public/assets/images/home/hero-bg.png'),
    path.join(root, 'public/assets/images/home/hero-bg.png'),
    240, 325, 214
  );

  // 3. Home Footer Background Neon Lines
  await transformSelective(
    path.join(root, 'public/assets/images/home/footer-bg.png'),
    path.join(root, 'public/assets/images/home/footer-bg.png'),
    240, 320, 214
  );

  // 4. Three Steps connector branch lines
  await transformHueModulate(
    path.join(root, 'public/assets/images/home/three-steps/step-left-p-500.png'),
    path.join(root, 'public/assets/images/home/three-steps/step-left-p-500.png'),
    -55
  );

  await transformHueModulate(
    path.join(root, 'public/assets/images/home/three-steps/step-center.png'),
    path.join(root, 'public/assets/images/home/three-steps/step-center.png'),
    -55
  );

  await transformHueModulate(
    path.join(root, 'public/assets/images/home/three-steps/step-right-p-500.png'),
    path.join(root, 'public/assets/images/home/three-steps/step-right-p-500.png'),
    -55
  );

  console.log('All image assets successfully transformed!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

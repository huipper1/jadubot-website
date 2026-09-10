const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\mehed\\.gemini\\antigravity-ide\\brain\\9b513a26-40e4-460d-91a4-02804fdab6d4';
const targetDir = 'c:\\fam\\jadubot\\public\\assets\\images\\industry';

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const map = {
  ecommerce: 'ecommerce_hero_3d_1789019408834.jpg',
  healthcare: 'healthcare_hero_3d_1789019431985.jpg',
  'real-estate': 'realestate_hero_3d_1789019453029.jpg',
  restaurant: 'restaurant_hero_3d_1789019475056.jpg',
  finance: 'finance_hero_3d_1789019500859.jpg',
  saas: 'saas_hero_3d_1789019581949.jpg',
  education: 'education_hero_3d_1789019605044.jpg',
  logistics: 'logistics_hero_3d_1789019628793.jpg',
  agency: 'agency_hero_3d_1789019656813.jpg',
  retail: 'retail_hero_3d_1789019689854.jpg'
};

for (const [key, filename] of Object.entries(map)) {
  const src = path.join(brainDir, filename);
  const dest = path.join(targetDir, `${key}.jpg`);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${filename} to ${dest}`);
  } else {
    console.error(`Missing file: ${src}`);
  }
}

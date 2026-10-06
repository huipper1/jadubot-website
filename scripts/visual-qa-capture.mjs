import { chromium } from "playwright";
import fs from "fs";
import path from "path";

async function main() {
  const browser = await chromium.launch({ headless: true });
  const outDir = path.resolve("public/screenshots");
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // 1. Desktop Light (1440x900)
  const contextLight = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    colorScheme: "light"
  });
  const pageLight = await contextLight.newPage();
  await pageLight.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await pageLight.waitForTimeout(1000);
  await pageLight.screenshot({ path: path.join(outDir, "hero-desktop-light.png") });
  console.log("Captured hero-desktop-light.png");

  // 2. Desktop Dark (1440x900)
  const contextDark = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    colorScheme: "dark"
  });
  const pageDark = await contextDark.newPage();
  await pageDark.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await pageDark.waitForTimeout(1000);
  await pageDark.screenshot({ path: path.join(outDir, "hero-desktop-dark.png") });
  console.log("Captured hero-desktop-dark.png");

  // 3. Tablet (820x1180)
  const contextTablet = await browser.newContext({
    viewport: { width: 820, height: 1180 },
    colorScheme: "light"
  });
  const pageTablet = await contextTablet.newPage();
  await pageTablet.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await pageTablet.waitForTimeout(1000);
  await pageTablet.screenshot({ path: path.join(outDir, "hero-tablet-light.png") });
  console.log("Captured hero-tablet-light.png");

  // 4. Mobile (390x844)
  const contextMobile = await browser.newContext({
    viewport: { width: 390, height: 844 },
    colorScheme: "light"
  });
  const pageMobile = await contextMobile.newPage();
  await pageMobile.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await pageMobile.waitForTimeout(1000);
  await pageMobile.screenshot({ path: path.join(outDir, "hero-mobile-light.png") });
  console.log("Captured hero-mobile-light.png");

  await browser.close();
  console.log("All visual QA screenshots captured successfully!");
}

main().catch(console.error);

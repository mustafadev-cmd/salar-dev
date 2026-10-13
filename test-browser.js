import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function runTests() {
  console.log('--- STARTING COMPREHENSIVE BROWSER QA REFINEMENT ---');
  const screenshotDir = path.resolve('screenshots');
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  const consoleLogs = [];
  const errors = [];

  page.on('console', (msg) => {
    const text = msg.text();
    consoleLogs.push(`[${msg.type()}] ${text}`);
    if (msg.type() === 'error') {
      errors.push(text);
    }
  });

  page.on('pageerror', (err) => {
    errors.push(`Page Error: ${err.message}`);
  });

  console.log('Navigating to http://127.0.0.1:5173/...');
  await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle2' });

  // Wait 1.5s for initial frame 4 preload and render
  await new Promise((r) => setTimeout(r, 1500));

  // 1. Initial Desktop Hero at 0%
  console.log('Capturing: 01_hero_desktop_start.png');
  await page.screenshot({ path: path.join(screenshotDir, '01_hero_desktop_start.png') });

  // 2. Continuous incremental scroll through hero forward (simulating natural wheel / touch)
  console.log('Scrolling incrementally forward to 1200px (mid-hero sequence)...');
  for (let y = 100; y <= 1200; y += 150) {
    await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), y);
    await new Promise((r) => setTimeout(r, 30));
  }
  await new Promise((r) => setTimeout(r, 400));
  console.log('Capturing: 02_hero_scroll_mid.png');
  await page.screenshot({ path: path.join(screenshotDir, '02_hero_scroll_mid.png') });

  // 3. Continue forward scroll to hero end (2400px)
  console.log('Scrolling forward to 2400px (hero sequence end)...');
  for (let y = 1350; y <= 2400; y += 150) {
    await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), y);
    await new Promise((r) => setTimeout(r, 30));
  }
  await new Promise((r) => setTimeout(r, 400));
  console.log('Capturing: 03_hero_scroll_end.png');
  await page.screenshot({ path: path.join(screenshotDir, '03_hero_scroll_end.png') });

  // 4. Scroll UP in reverse to verify reverse animation smoothness
  console.log('Scrolling reverse upward to 600px...');
  for (let y = 2250; y >= 600; y -= 150) {
    await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), y);
    await new Promise((r) => setTimeout(r, 30));
  }
  await new Promise((r) => setTimeout(r, 400));
  console.log('Capturing: 04_hero_reverse_scroll.png');
  await page.screenshot({ path: path.join(screenshotDir, '04_hero_reverse_scroll.png') });

  // 5. Scroll to About section
  console.log('Scrolling to #about section...');
  await page.evaluate(() => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView();
  });
  await new Promise((r) => setTimeout(r, 600));
  console.log('Capturing: 05_section_about.png');
  await page.screenshot({ path: path.join(screenshotDir, '05_section_about.png') });

  // 6. Scroll to Expertise section
  console.log('Scrolling to #expertise section...');
  await page.evaluate(() => {
    const el = document.getElementById('expertise');
    if (el) el.scrollIntoView();
  });
  await new Promise((r) => setTimeout(r, 600));
  console.log('Capturing: 06_section_expertise.png');
  await page.screenshot({ path: path.join(screenshotDir, '06_section_expertise.png') });

  // 7. Scroll to Projects section
  console.log('Scrolling to #projects section...');
  await page.evaluate(() => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView();
  });
  await new Promise((r) => setTimeout(r, 600));
  console.log('Capturing: 07_section_projects.png');
  await page.screenshot({ path: path.join(screenshotDir, '07_section_projects.png') });

  // 8. Scroll to Process section
  console.log('Scrolling to #process section...');
  await page.evaluate(() => {
    const el = document.getElementById('process');
    if (el) el.scrollIntoView();
  });
  await new Promise((r) => setTimeout(r, 600));
  console.log('Capturing: 08_section_process.png');
  await page.screenshot({ path: path.join(screenshotDir, '08_section_process.png') });

  // 9. Scroll to Technical Showcase & trigger interactive pipeline
  console.log('Scrolling to #architecture section...');
  await page.evaluate(() => {
    const el = document.getElementById('architecture');
    if (el) el.scrollIntoView();
  });
  await new Promise((r) => setTimeout(r, 600));

  console.log('Testing interactive architecture simulation...');
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const triggerBtn = buttons.find((b) => b.textContent && b.textContent.includes('TRIGGER FLOW'));
    if (triggerBtn) triggerBtn.click();
  });
  await new Promise((r) => setTimeout(r, 1600));
  console.log('Capturing: 09_section_architecture_active.png');
  await page.screenshot({ path: path.join(screenshotDir, '09_section_architecture_active.png') });

  // 10. Scroll to Contact section & Footer
  console.log('Scrolling to #contact section...');
  await page.evaluate(() => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView();
  });
  await new Promise((r) => setTimeout(r, 600));
  console.log('Capturing: 10_section_contact_footer.png');
  await page.screenshot({ path: path.join(screenshotDir, '10_section_contact_footer.png') });

  // 11. Mobile Viewport Test (375 x 812, deviceScaleFactor: 3 for high-DPI retina mobile)
  console.log('Switching to mobile viewport (375x812, DPR=3)...');
  await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 3, isMobile: true, hasTouch: true });
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await new Promise((r) => setTimeout(r, 1200));
  console.log('Capturing: 11_mobile_hero.png');
  await page.screenshot({ path: path.join(screenshotDir, '11_mobile_hero.png') });

  // Mobile mid-hero scroll
  console.log('Mobile scrolling to mid-hero (1200px)...');
  for (let y = 100; y <= 1200; y += 150) {
    await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), y);
    await new Promise((r) => setTimeout(r, 30));
  }
  await new Promise((r) => setTimeout(r, 400));
  console.log('Capturing: 11b_mobile_hero_mid.png');
  await page.screenshot({ path: path.join(screenshotDir, '11b_mobile_hero_mid.png') });

  // Mobile end-hero scroll
  console.log('Mobile scrolling to end-hero (2400px)...');
  for (let y = 1350; y <= 2400; y += 150) {
    await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), y);
    await new Promise((r) => setTimeout(r, 30));
  }
  await new Promise((r) => setTimeout(r, 400));
  console.log('Capturing: 11c_mobile_hero_end.png');
  await page.screenshot({ path: path.join(screenshotDir, '11c_mobile_hero_end.png') });

  // Mobile reverse scroll
  console.log('Mobile scrolling back up to top...');
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await new Promise((r) => setTimeout(r, 400));

  // Open mobile menu
  console.log('Testing mobile menu drawer...');
  await page.evaluate(() => {
    const hamburger = document.querySelector('header button[aria-label="Toggle menu"]');
    if (hamburger) hamburger.click();
  });
  await new Promise((r) => setTimeout(r, 400));
  console.log('Capturing: 12_mobile_menu_open.png');
  await page.screenshot({ path: path.join(screenshotDir, '12_mobile_menu_open.png') });

  await browser.close();

  console.log('--- QA SUMMARY ---');
  console.log(`Total console logs: ${consoleLogs.length}`);
  console.log(`Total errors: ${errors.length}`);
  if (errors.length > 0) {
    console.error('Errors detected:', errors);
  } else {
    console.log('SUCCESS: ZERO CONSOLE ERRORS DETECTED!');
  }
}

runTests().catch((e) => {
  console.error('QA Runner Failed:', e);
  process.exit(1);
});

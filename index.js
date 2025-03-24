const puppeteer = require('puppeteer-core');

async function main() {
  console.log('Starting Puppeteer...');
  console.log('Using Browserless endpoint:', process.env.BROWSERLESS_WS_ENDPOINT);
  
  try {
    const browser = await puppeteer.connect({
      browserWSEndpoint: process.env.BROWSERLESS_WS_ENDPOINT,
    });
    
    console.log('Connected to browser');
    
    // Simple test
    const page = await browser.newPage();
    await page.goto('https://example.com');
    const title = await page.title();
    console.log('Page title:', title);
    
    await browser.close();
    console.log('Browser closed');
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

main();

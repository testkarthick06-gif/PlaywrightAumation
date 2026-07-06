import { test, expect } from '@playwright/test';




test('Browser Context playwright Test', async ({ browser }) => {

  const context = await browser.newContext(); 
  const page = await context.newPage();
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  console.log('Page Title: ' + await page.title());
  await expect(page).toHaveTitle(/LoginPage Practise/);

});


test.only('Page Playwright Test', async ({ page }) => {
  await page.goto('https://www.Google.com/');    
  console.log('Page Title: ' + await page.title());
  await page.title();
 


} );       
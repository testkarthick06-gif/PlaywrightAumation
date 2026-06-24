import { test, expect } from '@playwright/test';


test('Page Playwright Test', async ({ page }) => {


  await page.goto('https://www.Google.com/');    
  console.log('Page Title: ' + await page.title());
  awa



} );
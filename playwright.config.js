
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 50 * 1000},


    use :{

      browserName: 'chromium',  
      headless: true
 
      
    }
  
});


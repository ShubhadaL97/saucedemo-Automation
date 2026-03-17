import { defineConfig, devices } from '@playwright/test';
import path from 'path';

const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const reportFolder = path.join('playwright-report', `userjourney-${timestamp}`);

export default defineConfig({
  testDir: './tests',
  timeout: 40000,
  expect: { timeout: 40000 },
  reporter:'html',

  use: {
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',       // record video if test fails
    trace: 'retain-on-failure',       // captures trace for debugging
  }
});


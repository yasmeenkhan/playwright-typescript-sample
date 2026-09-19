import { defineConfig, devices, type ReporterDescription } from '@playwright/test';
import dotenv from 'dotenv';
import * as os from 'node:os';
import path from 'node:path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export const AUTH_FILE = path.join(__dirname, '.auth/user.json');

const reporter: ReporterDescription[] = [
  ['list'],
  ['html', { open: 'never', outputFolder: 'playwright-report' }],
  [
    'allure-playwright',
    {
      resultsDir: 'allure-results',
      detail: true,
      suiteTitle: true,
      environmentInfo: {
        os_platform: os.platform(),
        os_release: os.release(),
        node_version: process.version,
        ci: process.env.CI ?? 'false',
        git_sha: process.env.GITHUB_SHA ?? 'local',
      },
    },
  ],
];

if (process.env.GITHUB_ACTIONS) {
  reporter.push([
    '@estruyf/github-actions-reporter',
    { title: 'Playwright results', useDetails: true, showError: true },
  ]);
}

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter,
  use: {
    baseURL: 'https://www.saucedemo.com/',
    testIdAttribute: 'data-test',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'setup',
      testMatch: /auth\.setup\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'chromium',
      dependencies: ['setup'],
      testIgnore: /auth\.setup\.ts|\/api\//,
      use: {
        ...devices['Desktop Chrome'],
        storageState: AUTH_FILE,
        launchOptions: {
          args: ['--disable-save-password-bubble', '--disable-password-manager-reauthentication'],
        },
      },
    },
    {
      name: 'firefox',
      dependencies: ['setup'],
      testIgnore: /auth\.setup\.ts|\/api\/|a11y/,
      use: {
        ...devices['Desktop Firefox'],
        storageState: AUTH_FILE,
      },
    },
    {
      name: 'api',
      testMatch: /\/api\/.*\.spec\.ts/,
      use: {
        baseURL: 'https://jsonplaceholder.typicode.com',
        storageState: { cookies: [], origins: [] },
      },
    },
  ],
});

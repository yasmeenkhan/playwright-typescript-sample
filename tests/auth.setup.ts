import fs from 'node:fs';
import path from 'node:path';
import { AUTH_FILE } from '../playwright.config';
import { test as setup } from '../fixtures/fixtures';
import { standardUser } from '../testdata/users';

setup(
  'authenticate as standard user',
  { tag: ['@smoke', '@regression'] },
  async ({ page, loginPage, productPage }) => {
    fs.mkdirSync(path.dirname(AUTH_FILE), { recursive: true });
    const { username, password } = standardUser();
    await loginPage.goto();
    await loginPage.login(username, password);
    await productPage.expectLoaded();
    await page.context().storageState({ path: AUTH_FILE });
  },
);

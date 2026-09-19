import { test as base } from '@playwright/test';
import * as allure from 'allure-js-commons';

export const test = base.extend<{ setAllureMeta: void }>({
  setAllureMeta: [
    // eslint-disable-next-line no-empty-pattern -- required by Playwright fixture API
    async ({}, use, testInfo) => {
      await allure.displayName(testInfo.title);
      await allure.owner(process.env.ALLURE_OWNER ?? 'qa-team');
      for (const tag of testInfo.tags) {
        await allure.tag(tag.replace(/^@/, ''));
      }
      await use();
    },
    { auto: true },
  ],
});

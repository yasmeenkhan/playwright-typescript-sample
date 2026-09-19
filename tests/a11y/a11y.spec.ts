import * as allure from 'allure-js-commons';
import { test } from '../../fixtures/fixtures';
import { allowedAxeRuleIds } from '../../testdata/a11y';
import { expectNoUnexpectedA11yViolations } from '../../utils/a11y';

test.describe('Accessibility', () => {
  test.beforeEach(async () => {
    await allure.feature('Accessibility');
    await allure.story('axe-core smoke');
  });

  test.describe('login page', () => {
    test.use({ storageState: { cookies: [], origins: [] } });

    test(
      'login has no new WCAG A/AA violations',
      { tag: ['@a11y', '@smoke', '@regression'] },
      async ({ loginPage, page }) => {
        await loginPage.goto();
        await expectNoUnexpectedA11yViolations(page, allowedAxeRuleIds.login);
      },
    );
  });

  test(
    'inventory has no new WCAG A/AA violations',
    { tag: ['@a11y', '@regression'] },
    async ({ loggedInProductPage, page }) => {
      await loggedInProductPage.expectLoaded();
      await expectNoUnexpectedA11yViolations(page, allowedAxeRuleIds.inventory);
    },
  );
});

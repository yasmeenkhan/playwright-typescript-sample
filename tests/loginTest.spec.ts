import * as allure from 'allure-js-commons';
import { test } from '../fixtures/fixtures';
import { loginErrors } from '../testdata/messages';
import { failedLogins, successfulLogins } from '../testdata/users';

test.describe('Login', () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  test.beforeEach(async () => {
    await allure.feature('Login');
    await allure.story('Authentication');
  });

  for (const scenario of successfulLogins) {
    test(scenario.title, { tag: [...scenario.tags] }, async ({ loginPage, productPage }) => {
      const user = scenario.getUser();
      await loginPage.goto();
      await loginPage.login(user.username, user.password);
      await productPage.expectLoggedIn();
    });
  }

  for (const scenario of failedLogins) {
    test(scenario.title, { tag: [...scenario.tags] }, async ({ loginPage }) => {
      const user = scenario.getUser();
      await loginPage.goto();
      await loginPage.login(user.username, user.password);
      await loginPage.expectErrorContains(loginErrors[scenario.errorKey]);
    });
  }
});

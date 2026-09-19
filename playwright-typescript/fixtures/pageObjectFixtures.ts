import { test as base } from '@playwright/test';
import { CartPage } from '../pageClasses/cartPage';
import { CheckoutPage } from '../pageClasses/checkoutPage';
import { LoginPage } from '../pageClasses/loginPage';
import { ProductPage } from '../pageClasses/productPage';
import { Utils } from '../utils/supportingFunctions';

type PageFixtures = {
  loginPage: LoginPage;
  productPage: ProductPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  utils: Utils;
};

export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  // Playwright requires object destructuring even when the fixture has no deps.
  // eslint-disable-next-line no-empty-pattern -- required by Playwright fixture API
  utils: async ({}, use) => {
    await use(new Utils());
  },
});

import { test as base } from '@playwright/test';
import { ProductPage } from '../pageClasses/productPage';

type AuthFixtures = {
  loggedInProductPage: ProductPage;
};

export const test = base.extend<AuthFixtures>({
  loggedInProductPage: async ({ page }, use) => {
    const productPage = new ProductPage(page);
    await productPage.open();
    await use(productPage);
  },
});

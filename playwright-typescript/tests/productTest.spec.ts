import * as allure from 'allure-js-commons';
import { expect, test } from '../fixtures/fixtures';
import { catalog, sortOptions } from '../testdata/products';

test.describe('Product catalog', () => {
  test.beforeEach(async () => {
    await allure.feature('Product Page');
    await allure.story('Filters, cart, and session');
  });

  test(
    'products sort A to Z',
    { tag: ['@smoke', '@regression'] },
    async ({ loggedInProductPage }) => {
      await loggedInProductPage.selectSort(sortOptions.nameAz);
      const names = await loggedInProductPage.getProductNames();
      expect(names).toEqual([...names].sort((a, b) => a.localeCompare(b)));
    },
  );

  test('products sort Z to A', { tag: ['@regression'] }, async ({ loggedInProductPage }) => {
    await loggedInProductPage.selectSort(sortOptions.nameZa);
    const names = await loggedInProductPage.getProductNames();
    expect(names).toEqual([...names].sort((a, b) => b.localeCompare(a)));
  });

  test(
    'products sort price high to low',
    { tag: ['@regression'] },
    async ({ loggedInProductPage }) => {
      await loggedInProductPage.selectSort(sortOptions.priceHighLow);
      const prices = await loggedInProductPage.getProductPrices();
      expect(prices).toEqual([...prices].sort((a, b) => b - a));
    },
  );

  test(
    'products sort price low to high',
    { tag: ['@regression'] },
    async ({ loggedInProductPage }) => {
      await loggedInProductPage.selectSort(sortOptions.priceLowHigh);
      const prices = await loggedInProductPage.getProductPrices();
      expect(prices).toEqual([...prices].sort((a, b) => a - b));
    },
  );

  test(
    'user can add a product to the cart',
    { tag: ['@smoke', '@regression'] },
    async ({ loggedInProductPage, cartPage }) => {
      await loggedInProductPage.addProductToCart(catalog.backpack);
      await loggedInProductPage.openCart();
      await cartPage.expectItemInCart(catalog.backpack);
      await cartPage.expectCheckoutVisible();
    },
  );

  test(
    'user can remove a product from the cart',
    { tag: ['@regression'] },
    async ({ loggedInProductPage, cartPage }) => {
      await loggedInProductPage.addProductToCart(catalog.bikeLight);
      await loggedInProductPage.openCart();
      await cartPage.expectItemInCart(catalog.bikeLight);
      await cartPage.removeItem(catalog.bikeLight);
      await cartPage.expectCartEmpty();
    },
  );

  test('user can log out', { tag: ['@regression'] }, async ({ loggedInProductPage, loginPage }) => {
    await loggedInProductPage.logout();
    await loginPage.expectOnLoginPage();
  });
});

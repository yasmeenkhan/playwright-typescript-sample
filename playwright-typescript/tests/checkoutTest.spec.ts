import * as allure from 'allure-js-commons';
import { test } from '../fixtures/fixtures';
import { catalog, customer } from '../testdata/products';

test.describe('Checkout', () => {
  test.beforeEach(async () => {
    await allure.feature('Checkout');
    await allure.story('Purchase happy path');
  });

  test(
    'standard user can complete checkout',
    { tag: ['@smoke', '@regression'] },
    async ({ loggedInProductPage, cartPage, checkoutPage }) => {
      await loggedInProductPage.addProductToCart(catalog.backpack);
      await loggedInProductPage.openCart();
      await cartPage.expectItemInCart(catalog.backpack);
      await cartPage.proceedToCheckout();
      await checkoutPage.expectInfoStep();
      await checkoutPage.fillCustomerInfo(customer);
      await checkoutPage.continueToOverview();
      await checkoutPage.expectOverviewContains(catalog.backpack);
      await checkoutPage.finishOrder();
      await checkoutPage.expectOrderComplete();
    },
  );
});

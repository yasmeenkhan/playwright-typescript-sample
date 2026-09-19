import { expect, type Locator, type Page } from '@playwright/test';

export class CartPage {
  private readonly checkoutButton: Locator;
  private readonly itemName: Locator;
  private readonly cartList: Locator;

  constructor(private readonly page: Page) {
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
    this.itemName = page.getByTestId('inventory-item-name');
    this.cartList = page.locator('[data-test="cart-list"], .cart_list');
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/cart\.html/);
    await expect(this.cartList).toBeVisible();
  }

  async getItemNames(): Promise<string[]> {
    return this.itemName.allTextContents();
  }

  async expectItemInCart(productName: string): Promise<void> {
    await this.expectLoaded();
    await expect(this.itemName).toContainText(productName);
  }

  async expectCheckoutVisible(): Promise<void> {
    await expect(this.checkoutButton).toBeVisible();
  }

  async expectCartEmpty(): Promise<void> {
    await expect(this.itemName).toHaveCount(0);
  }

  async removeItem(productName: string): Promise<void> {
    const item = this.page.locator('[data-test="inventory-item"], .cart_item').filter({
      hasText: productName,
    });
    await item.getByRole('button', { name: 'Remove' }).click();
  }

  async proceedToCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }
}

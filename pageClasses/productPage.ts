import { expect, type Locator, type Page } from '@playwright/test';
import { Utils } from '../utils/supportingFunctions';

export class ProductPage {
  private readonly utils = new Utils();
  private readonly inventoryList: Locator;
  private readonly sortSelect: Locator;
  private readonly productNames: Locator;
  private readonly productPrices: Locator;
  private readonly cartLink: Locator;
  private readonly menuButton: Locator;
  private readonly logoutLink: Locator;
  private readonly menuWrap: Locator;

  constructor(private readonly page: Page) {
    this.inventoryList = page.locator('[data-test="inventory-list"], .inventory_list');
    this.sortSelect = page.getByTestId('product-sort-container');
    this.productNames = page.getByTestId('inventory-item-name');
    this.productPrices = page.getByTestId('inventory-item-price');
    this.cartLink = page.getByTestId('shopping-cart-link');
    this.menuButton = page.getByRole('button', { name: 'Open Menu' });
    this.logoutLink = page.getByRole('button', { name: 'Logout' });
    this.menuWrap = page.locator('.bm-menu-wrap');
  }

  async open(): Promise<void> {
    await this.page.goto('/inventory.html');
    await this.expectLoaded();
  }

  async expectLoaded(): Promise<void> {
    await expect(this.inventoryList).toBeVisible();
  }

  async expectLoggedIn(): Promise<void> {
    await this.expectLoaded();
    await expect(this.menuButton).toBeVisible();
  }

  async selectSort(option: string): Promise<void> {
    await this.sortSelect.selectOption({ label: option });
  }

  async getProductNames(): Promise<string[]> {
    return this.productNames.allTextContents();
  }

  async getProductPrices(): Promise<number[]> {
    const prices = await this.productPrices.allTextContents();
    return prices.map((price) => this.utils.parsePrices(price));
  }

  async addProductToCart(productName: string): Promise<void> {
    const item = this.page.locator('[data-test="inventory-item"], .inventory_item').filter({
      hasText: productName,
    });
    await item.getByRole('button', { name: 'Add to cart' }).click();
  }

  async openCart(): Promise<void> {
    await this.cartLink.click();
  }

  async logout(): Promise<void> {
    await expect(async () => {
      if ((await this.menuWrap.getAttribute('aria-hidden')) !== 'false') {
        await this.menuButton.click();
      }
      await expect(this.menuWrap).toHaveAttribute('aria-hidden', 'false');
    }).toPass();
    await this.logoutLink.click();
  }
}

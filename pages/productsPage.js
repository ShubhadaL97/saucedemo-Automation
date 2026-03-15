import { expect } from '@playwright/test';

export class ProductsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }
  // Open product detail page
  async openProduct(productName) {
    const productLink = this.page.locator(`.inventory_item_name:has-text("${productName}")`);
    await expect(productLink).toBeVisible();
    await productLink.click();
  }

  // Add product to cart by product name
  async addProductToCart() {
    await this.page.locator('#add-to-cart').click();
  }

  // Go back to products page
  async goBackToProducts() {
    await this.page.locator('#back-to-products').click();
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }
}
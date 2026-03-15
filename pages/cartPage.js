import { expect } from '@playwright/test';

export class CartPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
    }

    async verifyButtons() {
        const removeButtons = this.page.locator('button[id^="remove"]');
        await expect(removeButtons).toHaveCount(2);  // verify there are 2 buttons
        await expect(removeButtons.nth(0)).toBeVisible();
        await expect(removeButtons.nth(1)).toBeVisible();

        await expect(this.page.locator('text=Continue Shopping')).toBeVisible();
        await expect(this.page.locator('text=Checkout')).toBeVisible();
    }
}
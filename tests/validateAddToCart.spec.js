import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { ProductsPage } from '../pages/productsPage';
import { CartPage } from '../pages/cartPage';

test('User journey: Add two products and verify cart buttons', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  // Step 1: Login
  await test.step('Login as standard_user', async () => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.loginSuccess();
  });

  // Step 2: open first product and add to cart  
  await test.step('Open first product and add to cart', async () => {
    await productsPage.openProduct('Sauce Labs Backpack');
    await productsPage.addProductToCart();
  });

  // Step 3: Go back to products page
  await test.step('Go back to products page', async () => {
    await productsPage.goBackToProducts();
  });
  
  // Step 4: Open second product and add to cart
  await test.step('Open second product and add to cart', async () => {
    await productsPage.openProduct('Sauce Labs Bike Light');
    await productsPage.addProductToCart();
  });
  
  // Step 5: Open Cart
  await test.step('Open cart and verify buttons', async () => {
    await productsPage.openCart();
    await cartPage.verifyButtons();//Step 6: Verify buttons - Remove, Checkout, continue shopping
  });
});


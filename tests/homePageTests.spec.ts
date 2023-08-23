import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/GoogleHomePage';

test('Search Field Exists', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();

  await expect (homePage.searchField, 'Search button not found').toBeVisible();

  await homePage.searchFlow('Ducks');
});
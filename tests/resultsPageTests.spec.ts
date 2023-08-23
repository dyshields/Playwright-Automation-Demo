import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/GoogleHomePage';
import { ResultsPage } from '../pages/GoogleResultsPage';

// To Do: variable-ize the searchTerm
test('Search Executed', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.searchFlow('Ducks');

  await expect (page, 'Search term not returned in URL').toHaveURL(/.*Ducks/);
});

test('Duck Results Returned', async ({ page }) => {
  const homePage = new HomePage(page);
  const resultsPage = new ResultsPage(page);

  await homePage.goto();
  await homePage.searchFlow('Ducks');

  await (resultsPage.imagesLink).waitFor();
  await expect (resultsPage.imagesLink, 'Duck images not found').toBeVisible();
  await expect (resultsPage.wikipediaLink, 'Wikipedia link not found').toBeVisible();
});
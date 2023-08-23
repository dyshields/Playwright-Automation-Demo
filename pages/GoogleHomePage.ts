// playwright-dev-page.ts
import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly url = 'https://www.google.com/';

  readonly searchField: Locator;
  readonly googleSearchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchField = page.getByRole('combobox', { name: 'Search' });
    this.googleSearchButton = page.getByRole('button', { name: 'Google Search' }).first();
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async searchFlow(searchTerm) {
    await this.searchField.click();
    await this.searchField.fill(searchTerm);
    await this.googleSearchButton.click();
  }
}
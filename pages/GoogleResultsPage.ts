// playwright-dev-page.ts
import { expect, Locator, Page } from '@playwright/test';

export class ResultsPage {
  readonly page: Page;
  readonly url = 'https://www.google.com/';

  readonly imagesLink: Locator;
  readonly wikipediaLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.imagesLink = page.getByRole('link', { name: 'Images for Ducks' });
    this.wikipediaLink = page.getByRole('link', { name: 'Duck - Wikipedia Wikipedia https://en.wikipedia.org › wiki › Duck' });
  }
}
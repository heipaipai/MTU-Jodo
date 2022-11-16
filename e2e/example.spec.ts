import { test, expect } from '@playwright/test';

const web = 'http://mtujodo.herokuapp.com/';

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  const getStarted = page.getByRole('link', { name: 'Get started' });

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test('testMain', async ({ page }) => {

  await page.goto(web);

  await page.getByRole('heading', { name: 'Welcome to MTU Jōdō' }).click();

});

test('testAddCompetitor', async ({ page }) => {

  await page.goto(web);

  await page.getByRole('button', { name: 'Competition' }).click();

  await page.getByRole('link', { name: 'Add Competitor' }).click();
  await expect(page).toHaveURL('http://mtujodo.herokuapp.com/competition/addCompetitor');

});

test('testViewCompetitor', async ({ page }) => {

  await page.goto(web);

  await page.getByRole('button', { name: 'Competition' }).click();

  await page.getByRole('link', { name: 'View Competitor' }).click();
  await expect(page).toHaveURL('http://mtujodo.herokuapp.com/competition/viewCompetitor');

});

test('testLogin', async ({ page }) => {
  await page.goto(web);
  await page.getByRole('link', { name: 'Login' }).click();
  await expect(page).toHaveURL('http://mtujodo.herokuapp.com/login');
});
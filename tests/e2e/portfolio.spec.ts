import { test, expect } from '@playwright/test';

test.describe('Portfolio Website', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has correct page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Itrat Rubab/);
  });

  test('displays hero section with name', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Itrat Rubab');
  });

  test('navigation links work correctly', async ({ page }) => {
    // Click on About link
    await page.click('a[href="#about"]');
    await expect(page.locator('#about')).toBeInViewport();

    // Click on Experience link
    await page.click('a[href="#experience"]');
    await expect(page.locator('#experience')).toBeInViewport();

    // Click on Skills link
    await page.click('a[href="#skills"]');
    await expect(page.locator('#skills')).toBeInViewport();

    // Click on Education link
    await page.click('a[href="#education"]');
    await expect(page.locator('#education')).toBeInViewport();

    // Click on Contact link
    await page.click('a[href="#contact"]');
    await expect(page.locator('#contact')).toBeInViewport();
  });

  test('displays all main sections', async ({ page }) => {
    await expect(page.locator('#home')).toBeVisible();
    await expect(page.locator('#about')).toBeVisible();
    await expect(page.locator('#experience')).toBeVisible();
    await expect(page.locator('#skills')).toBeVisible();
    await expect(page.locator('#education')).toBeVisible();
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('contact form has all required fields', async ({ page }) => {
    await page.locator('#contact').scrollIntoViewIfNeeded();

    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="subject"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
  });

  test('contact form validates required fields', async ({ page }) => {
    await page.locator('#contact').scrollIntoViewIfNeeded();

    // Try to submit empty form
    await page.click('button[type="submit"]');

    // Check that form fields are required
    const nameInput = page.locator('input[name="name"]');
    await expect(nameInput).toHaveAttribute('required', '');
  });
});

test.describe('Responsive Design', () => {
  test('mobile navigation works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Mobile menu should be hidden by default, hamburger visible
    await expect(page.locator('button[aria-label="Toggle menu"]')).toBeVisible();

    // Click hamburger to open menu
    await page.click('button[aria-label="Toggle menu"]');

    // Navigation links should now be visible
    await expect(page.locator('a[href="#about"]').first()).toBeVisible();
  });

  test('desktop navigation is visible', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');

    // Desktop navigation should be visible
    await expect(page.locator('ul.hidden.md\\:flex')).toBeVisible();
  });
});

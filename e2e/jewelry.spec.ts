import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero section with title from Drupal', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toContainText('Brilliance, Redefined')
  })

  test('renders features section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Handcrafted Excellence')).toBeVisible()
    await expect(page.getByText('Ethically Sourced')).toBeVisible()
  })

  test('renders CTA section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Find Your Perfect Piece')).toBeVisible()
  })

  test('has navigation links', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('link', { name: 'Collections' }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: 'About' }).first()).toBeVisible()
  })
})

test.describe('Collections page', () => {
  test('lists collections from Drupal', async ({ page }) => {
    await page.goto('/collections')
    await expect(page.locator('h1')).toContainText('Collections')
    await expect(page.getByText('Eternal Garden', { exact: true })).toBeVisible()
    await expect(page.getByText('Midnight Sky', { exact: true })).toBeVisible()
    await expect(page.getByText('Golden Hour', { exact: true })).toBeVisible()
  })
})

test.describe('Pieces page', () => {
  test('lists pieces from Drupal', async ({ page }) => {
    await page.goto('/pieces')
    await expect(page.locator('h1')).toContainText('Pieces')
    await expect(page.getByText('Aurora Engagement Ring')).toBeVisible()
    await expect(page.getByText('Celestial Pendant Necklace')).toBeVisible()
  })
})

test.describe('Artisans page', () => {
  test('lists artisans from Drupal', async ({ page }) => {
    await page.goto('/artisans')
    await expect(page.locator('h1')).toContainText('Artisans')
    await expect(page.getByText('Isabella Santos')).toBeVisible()
    await expect(page.getByText('James Chen')).toBeVisible()
  })
})

test.describe('About page', () => {
  test('renders about page content', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('h1')).toContainText('About Lumina')
  })
})

test.describe('Contact page', () => {
  test('renders contact page content', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.locator('h1')).toContainText('Contact')
  })
})

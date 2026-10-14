import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  reporter: "html",
  use: {
    baseURL: "http://127.0.0.1:3000",
    trace: "on-first-retry"
  },
  webServer: {
    command: "npm run dev",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: !process.env.CI
  },
  projects: [
    { name: "iPhone SE", use: { ...devices["iPhone SE"] } },
    { name: "Pixel 7", use: { ...devices["Pixel 7"] } },
    { name: "iPad", use: { ...devices["iPad Pro 11"] } },
    { name: "Desktop", use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } } },
    { name: "Laptop", use: { ...devices["Desktop Chrome"], viewport: { width: 1366, height: 768 } } }
  ]
});

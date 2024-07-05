import { test, expect, _electron as electron } from "@playwright/test";
test("homepage has title and links to intro page", async () => {
  const app = await electron.launch({ args: [".", "--no-sandbox"] });
  const page = await app.firstWindow();
  expect(await page.title()).toBe("Electron + Vite + React");
});

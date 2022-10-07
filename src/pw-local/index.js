import { firefox } from "playwright";

(async () => {
  const browser = await firefox.launch({
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto("https://google.com");
})();

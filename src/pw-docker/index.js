import { firefox } from "playwright";

(async () => {
  const browser = await firefox.launch();
  const page = await browser.newPage();

  await page.goto("https://google.com");
  console.log(await page.title());
  await browser.close();
})();

import { firefox } from "playwright";

(async () => {
  const browser = await firefox.connect(`ws://localhost:4000`);
  const page = await browser.newPage();

  page.goto("google.com");
})();

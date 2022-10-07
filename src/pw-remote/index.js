import * as fsPromises from "node:fs/promises";
import { firefox } from "playwright";

(async () => {
  const browser = await firefox.connect(`ws://localhost:8888`);
  const page = await browser.newPage();

  await page.goto("https://demoqa.com/upload-download");

  // Note that Promise.all prevents a race condition
  // between clicking and waiting for the download.
  const [download] = await Promise.all([
    // It is important to call waitForEvent before click to set up waiting.
    page.waitForEvent("download"),
    // Triggers the download.
    page.locator("#downloadButton").click(),
  ]);
  // wait for download to complete

  const aaa = await download.createReadStream();

  await fsPromises.writeFile("./download.jpg", aaa);

  await browser.close();
})();

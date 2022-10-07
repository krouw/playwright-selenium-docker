import { firefox } from "playwright";

(async () => {
  const browser = await firefox.connect(`ws://localhost:8888/ws`);
  // const page = await browser.newPage();
  // await page.goto("https://google.com");
  // const [download] = await Promise.all([
  //   // It is important to call waitForEvent before click to set up waiting.
  //   page.waitForEvent("download"),
  //   // Triggers the download.
  //   page.locator("#downloadButton").click(),
  // ]);
  // // wait for download to complete
  // const path = await download.path();
  // console.log(path);
})();

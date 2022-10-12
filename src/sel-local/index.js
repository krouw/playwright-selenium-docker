import { Builder } from "selenium-webdriver";
import * as firefoxSelenium from "selenium-webdriver/firefox.js";


const options = new firefoxSelenium.Options().setPreference(
    "security.warn_submit_secure_to_insecure",
    false
);

const driver = await new Builder()
    .forBrowser("firefox")
    .setFirefoxOptions( options)
    .build();

await driver.get('https://selenium.dev');

console.log(await driver.getTitle())

await driver.quit();

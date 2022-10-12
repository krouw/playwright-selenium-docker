import { Builder, Capabilities, FileDetector } from "selenium-webdriver";
import * as firefoxSelenium from "selenium-webdriver/firefox.js";

const options = new firefoxSelenium.Options().setPreference(
    "security.warn_submit_secure_to_insecure",
    false
);
const capabilities = Capabilities.firefox().getAcceptInsecureCerts()

const driver = new Builder()
    .usingServer("http://localhost:4444/")
    .withCapabilities(capabilities)
    .forBrowser('firefox')
    .setFirefoxOptions(options)
    .build();

driver.setFileDetector(new FileDetector())

await driver.get('https://selenium.dev');

console.log(await driver.getTitle())

await driver.quit();

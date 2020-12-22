const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.example.gt/", {
    waitUntil: "networkidle0",
  });

  await page.evaluate(() => {
    const btn = document.querySelector("#selector");
    if (btn) {
      console.log(btn);
      btn.click();
    }
  });
  await page.waitForTimeout(4000);
  await page.screenshot({ path: "example.png" });

  await browser.close();
})();

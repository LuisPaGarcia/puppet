const timeout = 1500
const rowsArray = [2, 3, 4, 5];
const nog = [6673015, 6100325];
const urls = nog.map(
  (nogi) =>
    `https://www.guatecompras.gt/concursos/consultaConcurso.aspx?nog=${nogi}&o=5`
);
const gotoProps = {
  waitUntil: "networkidle0",
  headless: false,
  devtools: false,
};
const puppeteer = require("puppeteer");

const secondTabSelector =
  "#MasterGC_ContentBlockHolder_RadTabStrip1 > div > ul > li:nth-child(2) > a"; // this could be nth-child(3) too

const nameQuery = (row, col) =>
  `#MasterGC_ContentBlockHolder_wucTiposAnexoConcurso_ctl05_gvCriterios > tbody > tr:nth-child(${row}) > td:nth-child(${col})`;
const valueQuery = (row, col) =>
  `#MasterGC_ContentBlockHolder_wucTiposAnexoConcurso_ctl05_gvCriterios > tbody > tr:nth-child(${row}) > td:nth-child(${col})`;

(async () => {
  for (const url of urls) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, gotoProps);

    const tabElement = await page.$(secondTabSelector);
    const tabText = await page.evaluate((name) => name.textContent, tabElement);
    console.log(tabText);
    const obj = {};
    if (tabText.includes("Bases del Proceso")) {
      await page.click(secondTabSelector);
      await page.waitForTimeout(timeout);
      for (const row of rowsArray) {
        const nameElement = await page.$(nameQuery(row, 1));
        const valueElement = await page.$(valueQuery(row, 2));
        const name = await page.evaluate(
          (name) => name.textContent,
          nameElement
        );
        const value = await page.evaluate(
          (value) => value.textContent,
          valueElement
        );

        obj[name.replace(/[\n\r]+|[\s]{2,}/g, " ").trim()] = value
          .replace(/[\n\r]+|[\s]{2,}/g, " ")
          .trim();
      }
    }

    console.log(obj);
    // await page.screenshot({ path: "example.png" });
    await browser.close();
  }
})();

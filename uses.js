const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://www.guatecompras.gt/concursos/consultaConcurso.aspx?nog=6673015&o=5",
    {
      waitUntil: "networkidle0",
    }
  );
  console.log("finish render");
  await page.waitForTimeout(3000);
  console.log("wait 3 sec");
  await page.click(
    "#MasterGC_ContentBlockHolder_RadTabStrip1 > div > ul > li:nth-child(2) > a"
  );
  console.log(secondTab);
  console.log("click to second tab");
  await page.waitForTimeout(3000);
  console.log("wait for 3 sec");

  const secondTab = await page.$(
    "#MasterGC_ContentBlockHolder_RadTabStrip1 > div > ul > li:nth-child(2) > a"
  );
  await page.click(
    "#MasterGC_ContentBlockHolder_wucTiposAnexoConcurso_acDocumentos > div:nth-child(6)"
  );
  console.log("click on accordion");

  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  console.log("scroll down");

  await page.screenshot({ path: "example.png" });
  console.log("take a pic");
  const container = await page.evaluate(() =>
    document.querySelector(
      "#MasterGC_ContentBlockHolder_ctl05 > div.divEncabezado > div.divTitulo"
    )
  );

  console.log(container);
  const data1 = await page.evaluate(() =>
    document.querySelector(
      "#MasterGC_ContentBlockHolder_wucTiposAnexoConcurso_ctl25_gvCriterios > tbody > tr:nth-child(2) > td:nth-child(1)"
    )
  );
  console.log(data1);
  const data2 = await page.evaluate(() =>
    document.querySelector(
      "#MasterGC_ContentBlockHolder_wucTiposAnexoConcurso_ctl05_gvCriterios > tbody > tr:nth-child(2) > td:nth-child(1)"
    )
  );
  console.log(data2);

  await browser.close();
})();

const puppeteer = require('puppeteer');
const timeout = 4000;
const nogs = require('./input/included.json');
const excludedNogs = require('./input/excluded.json');
const updateCompleted = require('./utils/updateCompleted');
const updateData = require('./utils/updateData');
const updateEmpty = require('./utils/updateEmpty');
const saveCsv = require('./utils/saveCsv');
const constants = require('./utils/const');
const {
	secondTabSelector,
	nameQuery,
	valueQuery,
	isEmpty,
	logRed,
	logGreen,
	rowsArray,
	gotoProps,
	tabTitle,
	getUrl
} = constants;

(async () => {
	for (const nog of nogs) {
		if (excludedNogs.includes(nog)) continue;

		try {
			const url = getUrl(nog);
			const browser = await puppeteer.launch();
			const page = await browser.newPage();
			await page.goto(url, gotoProps);

			const tabElement = await page.$(secondTabSelector);
			const tabText = await page.evaluate(name => name.textContent, tabElement);
			const obj = {};
			if (tabText.includes(tabTitle)) {
				await page.click(secondTabSelector);
				await page.waitForTimeout(timeout);
				for (const row of rowsArray) {
					const nameElement = await page.$(nameQuery(row, 1));
					const valueElement = await page.$(valueQuery(row, 2));
					const name = await page.evaluate(name => {
						if (name) return name.textContent;
						else return '';
					}, nameElement);
					const value = await page.evaluate(value => {
						if (value) return value.textContent;
						else return '';
					}, valueElement);
					const key = name.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim();
					const val = value.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim();
					if (key && val) {
						obj[key] = val;
					}
				}
			}
			await browser.close();
			if (isEmpty(obj) === false) {
				// add new props to completed
				obj.url = url;
				obj.nog = nog;
				obj.timestamp = new Date().toString();

				// save completed
				await updateCompleted(nog);

				// save data.json
				await updateData(obj);

				// update csv
				await saveCsv();

				logGreen(`Nog ${nog} saved. Url: ${url}`);
			} else {
				// update empty
				await updateEmpty(nog);

				logRed(`Nog ${nog} no data. Url: ${url}`);
			}
		} catch (error) {
			// log Error
			console.log(error);
			continue;
		}
	}
	console.log('Finished');
})();

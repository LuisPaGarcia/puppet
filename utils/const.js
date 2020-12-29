const secondTabSelector = '#MasterGC_ContentBlockHolder_RadTabStrip1 > div > ul > li:nth-child(2) > a'; // this could be nth-child(3) too

const nameQuery = (row, col) =>
	`#MasterGC_ContentBlockHolder_wucTiposAnexoConcurso_ctl05_gvCriterios > tbody > tr:nth-child(${row}) > td:nth-child(${col})`;
const valueQuery = (row, col) =>
	`#MasterGC_ContentBlockHolder_wucTiposAnexoConcurso_ctl05_gvCriterios > tbody > tr:nth-child(${row}) > td:nth-child(${col})`;

const isEmpty = obj => Object.keys(obj).length === 0 && obj.constructor === Object;

const log = (type, message) => console.log(`${{ r: '\x1b[33m', g: '\x1b[32m' }[type]}%s\x1b[0m`, message);
const logRed = message => log('r', message);
const logGreen = message => log('g', message);
const getUrl = nog => `https://www.guatecompras.gt/concursos/consultaConcurso.aspx?nog=${nog}&o=5`;
const rowsArray = [ 2, 3, 4, 5 ];
const tabTitle = 'Bases del Proceso';
const gotoProps = {
	waitUntil: 'networkidle0',
	headless: false,
	devtools: false
};

module.exports = {
	secondTabSelector,
	nameQuery,
	valueQuery,
	isEmpty,
	logRed,
	logGreen,
	rowsArray,
	gotoProps,
	getUrl,
	tabTitle
};

// TODO- fix local run + add tests in the next PR
const { uptime } = require("./nodejs/node_modules/synthetic");

(async function () {
	await uptime();
	process.exit(0);
})();

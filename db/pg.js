const pgConfig = require('../config/production').pg
const pg = require("pg");
const pool = new pg.Pool(pgConfig);

pool.on("error", function (error, client) {
	process.exit(1);
});

pool.on("connect", function () {
	console.log("db connected");
});
module.exports = pool;
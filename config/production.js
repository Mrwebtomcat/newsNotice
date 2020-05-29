const development = {
	pg: {
		user: "postgres", // env var: PGUSER
		database: "test", // env var: PGDATABASE
		password: "admin0403", // env var: PGPASSWORD
		host: "127.0.0.1", // Server hosting the postgres database
		port: 5432, // env var: PGPORT
		max: 100, // max number of clients in the pool
		idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
	},
}
module.exports = development

module.exports = {
	// complete your knexfile
	development: {
		client: 'sqlite3',
		useNullAsDefault: true,
		connection: {
			filename: './data/recipes.db3',
		},
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
		// needed when using foreign keys
		pool: {
			afterCreate: (conn, done) => {
			
				conn.run('PRAGMA foreign_keys = ON', done); 
			},
		},
	},
};

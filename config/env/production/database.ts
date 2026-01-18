export default ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'blk'),
			user: env('DATABASE_USERNAME', 'blk'),
			password: env('DATABASE_PASSWORD', 'blk@Ajani1e'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});

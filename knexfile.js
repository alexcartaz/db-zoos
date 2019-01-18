// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3', // tells knex that we're using the SQLite3 driver we installed via npm
    connection: {
      filename: './src/lambda.sqlite3', // update this with the location of your database file
    },
    useNullAsDefault: true, // new configuration for SQLite
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

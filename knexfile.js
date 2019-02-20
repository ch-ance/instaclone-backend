// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/insta.sqlite3",
      useNullAsDefaul: true,
      migrations: {
        directory: "./data/migrations",
        tableName: "dbmigrations"
      },
      seeds: { directory: "./data/seeds" }
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: ".data/migrations"
    },
    seeds: { directory: "./data/seeds" }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations"
    },
    seeds: { directory: "./data/seeds" }
  }
};
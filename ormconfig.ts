import { ConnectionOptions } from 'typeorm'
import config from './src/config'

const connectionOptions: ConnectionOptions = {
  cli: {
    entitiesDir: 'src/packages/database/models',
    migrationsDir: 'src/packages/database/migrations',
  },
  entities: ['src/packages/database/models/*.ts'],
  logging: false,
  migrations: ['src/packages/database/migrations/*.ts'],
  synchronize: false,
  type: 'postgres',
  ssl:
    process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : false,
  url: process.env.DATABASE_URL?process.env.DATABASE_URL:`postgres://${config.DB.USER}:${config.DB.PASSWORD}@${config.DB.HOST}:${config.DB.PORT}/${config.DB.NAME}`
}
console.log(process.env.SSL_CERT,"SSL_CERT")
module.exports = connectionOptions

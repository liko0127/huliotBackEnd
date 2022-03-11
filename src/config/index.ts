import * as dotEnvSafe from 'dotenv-safe'
import * as path from 'path'
let envPath = '.env'
if (process.env.NODE_ENV !== 'production') {
    envPath = '.env'

  if (process.env.NODE_ENV) {
    envPath = `${envPath}.${process.env.NODE_ENV}`
  }
}
  dotEnvSafe.config({
    allowEmptyValues: true,
    example: path.resolve(__dirname, '../../.env.example'),
    path: path.resolve(process.cwd(), envPath),
  })


interface Config {
  readonly DB: {
    readonly AUDIT_SCHEMA: string
    readonly HOST: string
    readonly MAIN_SCHEMA: string
    readonly NAME: string
    readonly PASSWORD: string
    readonly PORT: number
    readonly USER: string
  }
  readonly LOGGING: {
    readonly TYPE: string
    readonly LEVEL: string
    readonly ERROR_FILE: string
    readonly COMBINED_FILE: string
  }
  readonly URL: {
    readonly FRONTEND_URL: string,
    readonly DEFAULT_CONTENT_BASE_URI: string,
    readonly DEFAULT_IMAGE_URI: string,
    readonly METADATA_BASE_URI: string
  }
  readonly NODE_ENV: string
  readonly PINATA_AUTH_TOKEN: string
  readonly SERVER_PORT: number
}

const {
  DB_HOST,
  DB_AUDIT_SCHEMA,
  DB_MAIN_SCHEMA,
  DB_PASSWORD,
  DB_PORT,
  DB_NAME,
  DB_USERNAME,
  LOGGING_COMBINED_FILE,
  LOGGING_ERROR_FILE,
  LOGGING_LEVEL,
  LOGGING_TYPE,
  NODE_ENV,
  SERVER_PORT,
  FRONTEND_URL,
  DEFAULT_CONTENT_BASE_URI,
  DEFAULT_IMAGE_URI,
  METADATA_BASE_URI,
  PINATA_AUTH_TOKEN
} = process.env

const config: Config = {
  DB: {
    AUDIT_SCHEMA: DB_AUDIT_SCHEMA,
    HOST: DB_HOST,
    MAIN_SCHEMA: DB_MAIN_SCHEMA,
    NAME: DB_NAME,
    PASSWORD: DB_PASSWORD,
    PORT: parseInt(DB_PORT, 10),
    USER: DB_USERNAME,
  },
  LOGGING: {
    COMBINED_FILE: LOGGING_COMBINED_FILE,
    ERROR_FILE: LOGGING_ERROR_FILE,
    LEVEL: LOGGING_LEVEL,
    TYPE: LOGGING_TYPE,
  },
  URL:{
    FRONTEND_URL:FRONTEND_URL,
    DEFAULT_CONTENT_BASE_URI:DEFAULT_CONTENT_BASE_URI,
    DEFAULT_IMAGE_URI:DEFAULT_IMAGE_URI,
    METADATA_BASE_URI:METADATA_BASE_URI
  },
  NODE_ENV,
  PINATA_AUTH_TOKEN,
  SERVER_PORT: parseInt(SERVER_PORT, 10),
}

export default config

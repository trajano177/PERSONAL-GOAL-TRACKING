import { defineConfig, Config } from 'drizzle-kit'
import dotenv from 'dotenv';
import { env } from './src/env';
dotenv.config({
  path:'.env'
});
export default defineConfig({
  schema: "./src/db/schema.ts",
  out: './.migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL
  },
  verbose: true,
  strict: true,
})



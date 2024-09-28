import { defineConfig } from 'drizzle-kit'
import { env } from './src/env'
import  dotenv  from 'dotenv';
dotenv.config({
  path:'.env'
});
export default defineConfig({
  schema: './src/db/schema.ts',
  out: './.migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})

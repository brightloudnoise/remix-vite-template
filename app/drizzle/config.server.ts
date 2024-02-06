import Database from 'better-sqlite3'
import { drizzle } from 'drizzle-orm/better-sqlite3'
import { migrate } from 'drizzle-orm/better-sqlite3/migrator'
console.log('VITE_DATABASE_PATH', import.meta.env.VITE_DATABASE_PATH)
console.log('env', import.meta.env)
if (!import.meta.env.VITE_DATABASE_PATH) {
  throw new Error('Missing environment variable: VITE_DATABASE_PATH')
}
export const db = drizzle(new Database(import.meta.env.VITE_DATABASE_PATH))
// Automatically run migrations on startup
void migrate(db, {
  migrationsFolder: 'app/drizzle/migrations',
})

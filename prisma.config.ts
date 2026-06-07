import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { defineConfig } from 'prisma/config';

function getDatabaseUrl() {
  if (process.env.DATABASE_URL) {
    return process.env.DATABASE_URL;
  }

  const envPath = join(process.cwd(), '.env');
  if (existsSync(envPath)) {
    const databaseUrlLine = readFileSync(envPath, 'utf8')
      .split(/\r?\n/)
      .find((line) => line.trim().startsWith('DATABASE_URL='));

    if (databaseUrlLine) {
      return databaseUrlLine
        .slice('DATABASE_URL='.length)
        .trim()
        .replace(/^["']|["']$/g, '');
    }
  }

  return 'postgresql://postgres:postgres@localhost:5432/ecogen';
}

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations'
  },
  datasource: {
    url: getDatabaseUrl()
  }
});

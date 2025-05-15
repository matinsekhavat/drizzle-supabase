import { defineConfig } from "drizzle-kit";

const DATABASE_URL =
  "postgresql://postgres.edpgozdqnfkvmmaxzzem:0312879581Mm@@aws-0-eu-central-1.pooler.supabase.com:6543/postgres";
export default defineConfig({
  schema: "./src/drizzle/schema.ts",
  out: "./src/drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_URL,
    ssl: false,
  },
  verbose: true,
  strict: true,
});

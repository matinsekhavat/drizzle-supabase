// import { drizzle } from "drizzle-orm/node-postgres";
// import { Pool } from "pg";

// import * as schema from "@/drizzle/schema";

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL!,
// });

// // TODO: logger true
// export const db = drizzle(pool, { schema });

// export type DB = typeof db;
const DATABASE_URL =
  "postgresql://postgres.edpgozdqnfkvmmaxzzem:0312879581Mm@@aws-0-eu-central-1.pooler.supabase.com:6543/postgres";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "@/drizzle/schema";

const client = new Pool({
  connectionString: DATABASE_URL,
});

export const db = drizzle(client, { schema });
export default db;

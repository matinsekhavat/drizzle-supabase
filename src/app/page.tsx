import db from "@/drizzle/db";
import { user } from "@/drizzle/schema";
import React from "react";

async function Page() {
  // await db.insert(user).values({
  //   id: "1",
  //   name: "John Doe",
  //   email: "john.doe@example.com",
  //   password: "password",
  // });
  const users = await db.select().from(user);
  return <div>{JSON.stringify(users)}</div>;
}

export default Page;

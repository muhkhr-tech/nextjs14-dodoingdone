'use server'

import { db } from "@/db";
import { todos } from "@/db/schema";
import { asc, eq } from "drizzle-orm";

export default async function GetTodosProject(projectId: any) {
  const data = await db.select().from(todos).where(eq(todos.projectId, projectId)).orderBy(asc(todos.title))
  return data
}
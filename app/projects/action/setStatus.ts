'use server'

import { db } from "@/db"
import { projects } from "@/db/schema"
import { eq } from "drizzle-orm"

export default async function SetStatus(projectId: any, status: string) {
  const data = await db.update(projects).set({
    'status': status
  }).where(eq(projects.id, projectId)).returning()
  
}
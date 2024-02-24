'use server'

import { db } from "@/db";
import { projects } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { getServerSession } from "next-auth";

export default async function GetProjects(status: any, limit: any) {
  const session = await getServerSession()
  let data = []
  
  if (status === '') {
    data = await db.select().from(projects).where(eq(projects.userEmail, JSON.stringify(session?.user?.email))).orderBy(desc(projects.createdAt))
  } else {
    if (limit) {
      data = await db.select().from(projects).where(eq(projects.userEmail, JSON.stringify(session?.user?.email))).limit(limit).orderBy(desc(projects.createdAt))
    } else {
      data = await db.select().from(projects).where(eq(projects.userEmail, JSON.stringify(session?.user?.email))).orderBy(desc(projects.createdAt))
    }
  }
  
  return data
}
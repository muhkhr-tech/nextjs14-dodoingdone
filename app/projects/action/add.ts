'use server'

import { db } from "@/db"
import { projects, users } from "@/db/schema"
import { getServerSession } from "next-auth"

export default async function AddProject(inputData: any) {
  const session = await getServerSession()

  await db.insert(projects).values({
    'title': inputData.title,
    'description': inputData.description,
    'dueDate': inputData.dueDate,
    'userEmail': JSON.stringify(session?.user?.email)
  })
}
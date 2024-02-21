'use server'

import { db } from "@/db"
import { projects } from "@/db/schema"

export default async function AddProject(inputData: any) {
  await db.insert(projects).values({
    'title': inputData.title,
    'description': inputData.description,
    'dueDate': inputData.dueDate
  })
}
'use server'

import { db } from "@/db"
import { projects, todos } from "@/db/schema"
import { eq } from "drizzle-orm"
import { getServerSession } from "next-auth"

export default async function AddTodo({projectId}: any, todosData: any) {
  const session = await getServerSession()

  todosData.map( async (todo: string) => (
    await db.insert(todos).values({
      'title': todo,
      'status': 'do',
      'projectId': projectId,
      'userEmail': JSON.stringify(session?.user?.email)
    })
  ))
  
  const project = await db.select().from(projects).where(eq(projects.id, projectId))

  await db.update(projects).set({
    totalTodos: project[0].totalTodos + todosData.length
  }).where(eq(projects.id, projectId))

}
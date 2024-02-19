'use server'

import { db } from "@/db"
import { projects, todos } from "@/db/schema"
import { eq } from "drizzle-orm"

export default async function SetToDoing(todoId: any, projectId: any) {
  const todo = await db.select().from(todos).where(eq(todos.id, todoId))

  if (todo[0].status === 'do' || todo[0].status === 'done') {
    const data = await db.update(todos).set({
      'status': 'doing'
    }).where(eq(todos.id, todoId)).returning()

    const project = await db.select().from(projects).where(eq(projects.id, projectId))

    if (todo[0].status === 'done') {
      await db.update(projects).set({
        totalTodosInprogress: project[0].totalTodosInprogress + 1,
        totalTodosCompleted: project[0].totalTodosCompleted - 1,
      }).where(eq(projects.id, projectId))
    } else {
      await db.update(projects).set({
        totalTodosInprogress: project[0].totalTodosInprogress + 1
      }).where(eq(projects.id, projectId))
    }

    return data[0].status
  }
}
'use server'

import { db } from "@/db"
import { projects, todos } from "@/db/schema"
import { eq } from "drizzle-orm"

export default async function SetToDo(todoId: any, projectId: any) {
  const todo = await db.select().from(todos).where(eq(todos.id, todoId))

  if (todo[0].status === 'doing') {
    const data = await db.update(todos).set({
      'status': 'do'
    }).where(eq(todos.id, todoId)).returning()

    const project = await db.select().from(projects).where(eq(projects.id, projectId))

    await db.update(projects).set({
      totalTodos: project[0].totalTodos + 1,
      totalTodosInprogress: project[0].totalTodosInprogress - 1,
    }).where(eq(projects.id, projectId))

    return data[0].status
  }
}
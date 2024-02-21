'use server'

import { db } from "@/db";
import { projects, todos, todosRelations } from "@/db/schema";
import { asc, eq } from "drizzle-orm";

export default async function GetTodos(status: any, limit: number = 0, withProject: boolean = false) {
  let data:any = []
  // const data = await db.select().from(todos).where(eq(todos.status, status)).limit(limit).orderBy(asc(todos.title))
  if (withProject) {
    if (limit > 0 ) {
      data = await db.query.todos.findMany({
        where: eq(todos.status, status),
        limit: limit,
        orderBy: [asc(todos.title)],
        with: {
          project: true
        }
      })
    } else {
      data = await db.query.todos.findMany({
        where: eq(todos.status, status),
        orderBy: [asc(todos.title)],
        with: {
          project: true
        }
      })
    }
    
  } else {
    if (limit > 0 ) {
      data = await db.query.todos.findMany({
        where: eq(todos.status, status),
        limit: limit,
        orderBy: [asc(todos.title)],
      })
    } else {
      data = await db.query.todos.findMany({
        where: eq(todos.status, status),
        orderBy: [asc(todos.title)],
      })
    }
  }
  
  return data
}
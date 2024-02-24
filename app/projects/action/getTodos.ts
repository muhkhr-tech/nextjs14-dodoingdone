'use server'

import { db } from "@/db";
import { projects, todos, todosRelations } from "@/db/schema";
import { and, asc, eq } from "drizzle-orm";
import { getServerSession } from "next-auth";

export default async function GetTodos(status: any, limit: number = 0, withProject: boolean = false) {
  const session = await getServerSession()

  let data:any = []

  if (withProject) {
    if (limit > 0 ) {
      data = await db.query.todos.findMany({
        where: and(eq(projects.userEmail, JSON.stringify(session?.user?.email)), eq(todos.status, status)),
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
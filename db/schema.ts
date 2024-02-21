import { relations, sql } from 'drizzle-orm';
import {
  bigint,
  date,
  integer,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  title: varchar('title').notNull().unique(),
  description: text('description'),
  totalTodos: integer('total_todos').notNull().default(0),
  totalTodosInprogress: integer('total_todos_inprogress').notNull().default(0),
  totalTodosCompleted: integer('total_todos_completed').notNull().default(0),
  dueDate: date('due_date').notNull(),
  createdAt: timestamp('created_at').defaultNow()
})

export const projectsRelations = relations(projects, ({ many }) => ({
  todos: many(todos),
}));

export const todos = pgTable('todos', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  status: text('status').notNull(),
  projectId: integer('project_id').notNull()
})

export const todosRelations = relations(todos, ({ one }) => ({
  project: one(projects, {
    fields: [todos.projectId],
    references: [projects.id],
  }),
}));
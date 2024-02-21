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

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('title').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull()
})

export const usersRelations = relations(users, ({ many }) => ({
  projects: many(projects),
}));

export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  title: varchar('title').notNull().unique(),
  status: text('status'),
  description: text('description'),
  totalTodos: integer('total_todos').notNull().default(0),
  totalTodosInprogress: integer('total_todos_inprogress').notNull().default(0),
  totalTodosCompleted: integer('total_todos_completed').notNull().default(0),
  dueDate: date('due_date').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  userId: integer('user_id').notNull()
})

export const projectssRelations = relations(projects, ({ many }) => ({
  todos: many(todos),
}));

export const todos = pgTable('todos', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  status: text('status').notNull(),
  projectId: integer('project_id')
})

export const todosRelations = relations(todos, ({ one }) => ({
  author: one(projects, {
    fields: [todos.projectId],
    references: [projects.id],
  }),
}));
import { relations } from 'drizzle-orm';
import {
  date,
  integer,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';
import { AdapterAccount } from 'next-auth/adapters';

export const users = pgTable("user", {
  id: text("id").notNull().primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
 })
 
 export const accounts = pgTable(
 "account",
 {
   userId: text("userId")
     .notNull()
     .references(() => users.id, { onDelete: "cascade" }),
   type: text("type").$type<AdapterAccount["type"]>().notNull(),
   provider: text("provider").notNull(),
   providerAccountId: text("providerAccountId").notNull(),
   refresh_token: text("refresh_token"),
   access_token: text("access_token"),
   expires_at: integer("expires_at"),
   token_type: text("token_type"),
   scope: text("scope"),
    id_token: text("id_token"),
   session_state: text("session_state"),
 },
 (account) => ({
   compoundKey: primaryKey({ columns: [account.provider, account.providerAccountId] }),
 })
 )
 
 export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
 })
 
 export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
 )

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
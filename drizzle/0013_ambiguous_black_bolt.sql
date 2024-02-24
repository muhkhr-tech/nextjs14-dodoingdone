ALTER TABLE "projects" RENAME TO "ddd_projects";--> statement-breakpoint
ALTER TABLE "todos" RENAME TO "ddd_todos";--> statement-breakpoint
ALTER TABLE "user" RENAME TO "ddd_user";--> statement-breakpoint
ALTER TABLE "ddd_projects" DROP CONSTRAINT "projects_title_unique";--> statement-breakpoint
ALTER TABLE "ddd_projects" ADD CONSTRAINT "ddd_projects_title_unique" UNIQUE("title");
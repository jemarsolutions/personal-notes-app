import {
  integer,
  text,
  boolean,
  pgTable,
  timestamp,
} from "drizzle-orm/pg-core";

export const tasks = pgTable("tasks", {
  id: integer("id").primaryKey(),
  task: text("task").notNull(),
  description: text("description").notNull(),
  is_done: boolean("is_done").default(false),
  due_date: timestamp("due_date").notNull(),
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
  priority: text("priority").notNull(),
  category: text("category").notNull(),
});

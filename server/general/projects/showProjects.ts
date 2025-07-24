"use server";

import { db } from "@/db/drizzle";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function showProjectss() {
  const allProjects = await db
    .select()
    .from(projects)
    .where(eq(projects.belongs_to, "general"));
  return allProjects;
}

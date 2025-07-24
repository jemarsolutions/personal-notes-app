"use server";

import { db } from "@/db/drizzle";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function projectDetails(projectId: string) {
  const project = await db
    .select()
    .from(projects)
    .where(eq(projects.id, projectId));

  if (!project) {
    throw new Error("Project not found");
  }

  return project;
}

"use server";

import { db } from "@/db/drizzle";
import { projects } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addProject(formData: FormData) {
  const project_name = formData.get("project_name") as string;
  const project_description = formData.get("project_description") as string;

  const projectData = {
    name: project_name,
    description: project_description,
    belongs_to: "general", // Default to 'general' for general projects
  };

  await db.insert(projects).values(projectData);

  revalidatePath("/general");
  redirect("/general");
}

import { projectDetails } from "@/server/general/projects/projectDetails";
import React from "react";

export default async function ProjectDetailsTasks(params: {
  params: { id: string };
}) {
  const { id } = await params.params;
  const [project] = await projectDetails(id);
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <div className="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
          <p className="text-4xl text-gray-400 dark:text-gray-500">
            {project.name}
          </p>
        </div>
      </div>
    </div>
  );
}

import { showProjectss } from "@/server/general/projects/showProjects";
import Link from "next/link";
import React from "react";

export default async function GeneralPage() {
  const projects = await showProjectss();
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <div className="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
          <p className="text-4xl text-gray-400 dark:text-gray-500">
            General Projects
          </p>
        </div>
        {projects.length === 0 && (
          <p className="text-center">No projects found.</p>
        )}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {projects.map((project) => (
            <Link
              href={`/general/${project.id}`}
              key={project.id}
              className="flex flex-col items-start justify-start rounded-sm bg-gray-50 dark:bg-gray-800 p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <h2 className="text-xl text-gray-700 dark:text-gray-300">
                {project.name}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

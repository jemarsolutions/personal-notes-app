import { addProject } from "@/server/general/projects/addProject";
import React from "react";

export default function AddForm() {
  return (
    <div>
      <form action={addProject}>
        <label
          htmlFor="project_name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Project Name
        </label>
        <input
          type="text"
          id="project_name"
          name="project_name"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
        <label
          htmlFor="project_description"
          className="block text-sm font-medium text-gray-700 mt-4 dark:text-gray-300"
        >
          Project Description
        </label>
        <textarea
          id="project_description"
          name="project_description"
          rows={4}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
        <button
          type="submit"
          className="cursor-pointer mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Project
        </button>
      </form>
    </div>
  );
}

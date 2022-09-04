

import projects from "../projects"
import { useContext } from 'react';

import PortfolioContext from "../context/PortfolioContext"

  export default function ProjectsPage() {
    const {setCurrentPage} =useContext(PortfolioContext)

    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Projects</h2>
  
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
              >
                <div className="aspect-square bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-48">
                  <img
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    className="w-full h-full object-center object-cover object-top sm:w-full sm:h-full"
                  />
                </div>
                <div className="flex-1 p-4 space-y-2 flex flex-col">
                  <h3 className="text-base font-bold text-gray-900">
                    <button onClick={()=>{setCurrentPage(project.click)}}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {project.name}
                    </button>
                  </h3>
                  <p className="text-sm text-gray-500">{project.description}</p>
                  <div className="flex-1 flex flex-col justify-end">
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

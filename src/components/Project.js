// import { Fragment, useEffect } from "react"
// import { StarIcon } from "@heroicons/react/20/solid"
// import { Tab } from "@headlessui/react"
import { useContext } from "react"

import projects from "../projects"
import PortfolioContext from "../context/PortfolioContext"

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ")
// }

export default function Project() {
  let project;
  const {currentPage} =useContext(PortfolioContext)
  if(currentPage === 'wedding'){
    project = projects[0]
  }
  else if (currentPage === 'date'){
    project=projects[1]
  }
  else if (currentPage === 'blackjack'){
    project=projects[2]
  }
  else if(currentPage === 'weather'){
    project=projects[3]
  }
  else if(currentPage === 'tech-blog'){
    project=projects[4]
  }
  else if (currentPage === 'yoodlize'){
    project = projects[5]
  }


  return (
    <div className="bg-white mt-10">
      <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* Product */}
        <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
          {/* Product image */}
          <div className="lg:row-end-1 lg:col-span-4">
            <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden drop-shadow-xl">
              <img
                src={project.imageSrc}
                alt={project.imageAlt}
                className="object-center object-cover"
              />
            </div>
          </div>

          {/* Product details */}
          <div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
            <div className="flex flex-col-reverse">
              <div className="mt-4">
                <h1 className="text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl">
                  {project.name}
                </h1>

                <h2 id="information-heading" className="sr-only">
                  Product information
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  Version {project.version.name} (Updated{" "}
                  <time dateTime={project.version.datetime}>
                    {project.version.date}
                  </time>
                  )
                </p>
              </div>
            </div>
            <h3 className="text-sm mt-4 font-medium text-gray-900">
              Description:
            </h3>
            <p className="text-gray-500 mt-6">{project.description}</p>

            <h3 className="text-sm mt-4 font-medium text-gray-900">Method:</h3>
            <p className="text-gray-500 mt-6">{project.paragraph}</p>

            <div className="border-t border-gray-200 mt-10 pt-10">
              <h3 className="text-sm font-medium text-gray-900">
                What was used:
              </h3>
              <div className="mt-4 prose prose-sm text-gray-500">
                <ul >
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <a
                
                className="w-full bg-red-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-red-500"
                href ={project.href}
                target= "_blank"
                rel="noreferrer"
              >
                Deployed App
              </a>
              <a
           
                className="w-full bg-red-50 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-red-700 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-red-500"
                href= {project.github}
                target= "_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

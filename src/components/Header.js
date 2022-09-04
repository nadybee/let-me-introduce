

import { useContext} from "react"
import PortfolioContext from "../context/PortfolioContext"

import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import {
  Squares2X2Icon,
  Bars3Icon,
  XMarkIcon,

} from "@heroicons/react/24/outline"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

import projects from "../projects"




function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Header() {
  const {
   setCurrentPage
   
  } = useContext(PortfolioContext)


  return (
    <div className="bg-gray-50 sticky top-0 z-40">
      <Popover className="relative bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
            <button onClick={()=>{setCurrentPage('about')}}> 
              <h1 className="text-xl md:text-3xl text-red-700">
                {" "}
                Natalie Fairbourne Portfolio
              </h1>
              </button>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      )}
                    >
                      <span>My Projects</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {projects.map((item) => (
                              <a
                                key={item.name}
                                onClick={()=>{setCurrentPage(item.click)}}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-red-600"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                           
                          </div>
                          <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            
                              <div  className="flow-root">
                                <button
                                  onClick = {()=>{  setCurrentPage('projects')}}
                                  className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                >
                                  <Squares2X2Icon
                                    className="flex-shrink-0 h-6 w-6 text-red-600"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3">See All Projects</span>
                                </button>
                              </div>
                            
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <button
               onClick ={()=>{setCurrentPage('yoodlize')}}
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Current Project
              </button>
              <button
                onClick ={()=>{setCurrentPage('resume')}}
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Resume
              </button>
              <button
                onClick={() => { setCurrentPage('contact')
                

             
                }}
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Contact Me
              </button>
            </Popover.Group>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h1> Natalie Fairbourne Portfolio</h1>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                  {projects.map((item) => (
                      <button
                        key={item.name}
                        onClick={()=>{setCurrentPage(item.click)}}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <item.icon
                          className="flex-shrink-0 h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </button>
                    ))}
                      
                      
                
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <button
                   onClick={() => {
                      setCurrentPage('yoodlize')
                    }}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Current Project
                  </button>
                  <button
                    onClick={() => {
                      setCurrentPage('resume')
                    }}
                    className="text-base font-medium pointer-events-auto text-gray-900 hover:text-gray-700"
                  >
                    Resume
                  </button>
                  <button
                    onClick={() => {
                      setCurrentPage('contact')
                    }}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}

import { Fragment } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Tab } from '@headlessui/react'

import projects from '../projects'

const product = {
  name: 'The Wedding Loop',
  version: { name: '1.0', date: 'July, 2021' },
  price: '$220',
  description:
    'This application was a group project to showcase the MVC model. My main contribution was the app design and styling of the front end, the sign up and login features and the functionality of the photo uploading and saving to AWS S3 bucket.',
  highlights: [
    'Vanilla Javascript',
    'mySQL, sequelize',
    'AWS S3 Bucket',
    'Tailwind css',
    'Handlebars'
  ],
  imageSrc: './images/wedding_loop.png',
  imageAlt: 'Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles.',
}



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Project() {
  return (
    <div className="bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* Product */}
        <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
          {/* Product image */}
          <div className="lg:row-end-1 lg:col-span-4">
            <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden drop-shadow-xl">
              <img src={projects[0].imageSrc} alt={projects[0].imageAlt} className="object-center object-cover" />
            </div>
          </div>

          {/* Product details */}
          <div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
            <div className="flex flex-col-reverse">
              <div className="mt-4">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{projects[0].name}</h1>

                <h2 id="information-heading" className="sr-only">
                  Product information
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  Version {projects[0].version.name} (Updated{' '}
                  <time dateTime={projects[0].version.datetime}>{projects[0].version.date}</time>)
                </p>

              </div>

             
            </div>
             <h3 className="text-sm mt-4 font-medium text-gray-900">Description:</h3>
            <p className="text-gray-500 mt-6">{projects[0].description}</p>

            <h3 className="text-sm mt-4 font-medium text-gray-900">Method:</h3>
            <p className="text-gray-500 mt-6">{projects[0].paragraph}</p>

           

            <div className="border-t border-gray-200 mt-10 pt-10">
              <h3 className="text-sm font-medium text-gray-900">What was used:</h3>
              <div className="mt-4 prose prose-sm text-gray-500">
                <ul role="list">
                  {projects[0].highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <button
                type="button"
                className="w-full bg-red-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-red-500"
              >
                Deployed App
              </button>
              <button
                type="button"
                className="w-full bg-red-50 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-red-700 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-red-500"
              >
                GitHub
              </button>
            </div>

          </div>

        </div>
        
      </div>

      
    </div>
  )
}

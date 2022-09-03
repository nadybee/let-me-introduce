export default function Resume() {
  return (
    <div className="bg-white lg:relative ">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-lg text-red-700 font-semibold">Resume</h2>
            <h3 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
              Natalie Pope Fairbourne
            </h3>
            <p className="mt-2 text-base leading-8 font-light tracking-tight text-gray-900">
            natalie@yoodlize.com
            </p>
            <p className="text-base leading-8 font-light tracking-tight text-gray-900">
            801-708-1016
            </p>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src="./images/natalie_profile.png"
                    alt="Natalie Fairbourne profile pic"
                    width={1184}
                    height={1376}
                  />
                </div>
                <a
              href = "./fairbourne_resume.pdf"
              target= "_blank"
             
                className="w-full mt-2 bg-white border border-red-700 rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-red-700 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-red-500"
              >
               Download my Resume
              </a>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <h3 className="mt-2 text-xl leading-8 font-bold tracking-tight text-gray-900">
                Education
              </h3>

              <ul className="text-lg text-gray-500 list-[square] ml-8">
                <li> Brigham Young University (1997-2000)</li>
                <li>
                  {" "}
                  University of Utah Profession Education Bootcamp (2022)
                </li>
              </ul>
            </div>
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <h3 className="mt-8 text-xl leading-8 font-bold tracking-tight text-gray-900">
                Experience
              </h3>

              <ul className="text-lg text-gray-500 list-[square] ml-8 my-2">
                <li className="font-bold">
                  {" "}
                  Yoodlize: Co-Founder/CPO (2020-current)
                </li>
                <ul className="list-disc ml-8 font-light">
                  <li className=""> I oversaw the design and launch of 2.0.</li>
                  <li> I manage the app with over 10,000 users.</li>
                </ul>
                <li className="mt-4 font-bold">
                  {" "}
                  Bee's Kitchen: Owner/Operator (2018-current)
                </li>
                <ul className="list-disc ml-8  font-light">
                  <li>
                    {" "}
                    I provide food services for in-patient care facilities 365
                    days a year.
                  </li>
                  <li>
                    {" "}
                    I manage employees, inventory, budgets, invoicing, and
                    operations.
                  </li>
                </ul>
                <li className="mt-4 font-bold">
                  {" "}
                  Bamba Water: Co-Founder/CFO(2014-2017)
                </li>
                <ul className="list-disc ml-8 font-light">
                  <li>
                    {" "}
                    I helped launch the water company in East Africa. It sells
                    over 100k units a day.{" "}
                  </li>
                  <li>
                    {" "}
                    I over saw the finance and budgeting. Bamba water has 2
                    million in revenue and 150+ employees.{" "}
                  </li>
                  <li>
                    {" "}
                    I implemented a robust inventory management and loss
                    prevention program.{" "}
                  </li>
                </ul>

                <li className="mt-4 font-bold">
                  {" "}
                  Bestway Markets Mtaani: Co-Founder (2015-2017)
                </li>
                <ul className="list-disc ml-8 font-light">
                  <li>
                    {" "}
                    Bestway Mtaani is a chain of mini supermarkets in Mombasa,
                    Kenya.{" "}
                  </li>
                  <li> I helped open three locations. </li>
                  <li> I implemented inventory, POS and ordering systems. </li>
                </ul>
              </ul>
            </div>
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <h3 className="mt-8 text-xl leading-8 font-bold tracking-tight text-gray-900">
                Skills
              </h3>
              <ul className="text-lg text-gray-500 list-[square] ml-8 mt-2">
                <li>HTML/CSS: Tailwind, bootstrap</li>
                <li>JavaScript</li>
                <li>SQL, mySQL, sequelize</li>
                <li>Node.js, express</li>
                <li>MongoDB, mongoose</li>
                <li>React</li>
                <li>Figma/Sketch</li>
                <li>Adobe Suite</li>
                <li>Product Management (scrum/agile)</li>
                <li>Startup and product launch</li>
                <li>Marketing</li>
                <li>QuickBooks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

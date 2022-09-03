import { useContext } from "react"
import PortfolioContext from "../context/PortfolioContext"
export default function About() {
  const {
    setCurrentPage
    
   } = useContext(PortfolioContext)
    return (
<main className="lg:relative">
    <div className="mx-auto max-w-7xl w-full pt-8 pb-20 lg:py-48 lg:text-left">
      <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover object-right"
            src={require("/images/IMG_1153.jpg")}
            alt="Natalie sitting at her computer desk"
          />
        </div>
        <h1 className="text-2xl mt-2 tracking-tight font-bold text-gray-700  md:text-5xl">
          Let me introduce myself . . .
          {/* <span className="block xl:inline">Data to enrich your</span>{" "}
      <span className="block text-red-600 xl:inline">
        online business
      </span> */}
        </h1>
        <p className="mt-3 max-w-md mx-auto text-gray-600 text-base md:text-xl md:mt-5 md:max-w-3xl">
          My name is Natalie Fairbourne and I live in Orem, Utah. I am a
          software developer in training at the University of Utah Full Stack
          Bootcamp. I am the co-founder and CPO of Yoodlize, a peer-to-peer
          marketplace where you can rent anything. I oversee the platform and I
          designed the majority of the app. My motivation to learn to code is to
          be more hands on in continued development of Yoodlize.
          <br></br>I also have a food services company called Bee's Kitchen. I
          have three almost grown children, two 100 lb. dogs, and a husband who
          is also my co-founder. I am about 500 hrs into the 10,000 hours it
          takes to become a master software engineer!
        </p>
        <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a
                 onClick = {()=>{  setCurrentPage('projects')}}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
            >
              See Projects
            </a>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a
             onClick={()=>{setCurrentPage('contact')}}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
    )
}

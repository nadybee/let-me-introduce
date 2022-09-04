// import Header from "./components/Header";
// import Footer from "./components/Footer"
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Resume from "./Resume";
import ProjectsPage from "./ProjectsPage";
<<<<<<< HEAD
import Modal from "./modal";

import { useContext} from 'react';
=======
// import {send} from 'emailjs-com'
// import {useState} from 'react'
import { useContext, useEffect } from 'react';
>>>>>>> parent of d6692771 (clean up and readme)

import PortfolioContext from "../context/PortfolioContext"

export default function Main(){
    const {currentPage} =useContext(PortfolioContext)
   return (
    <> 
  
    {
        (()=>{
            if (currentPage === 'about'){
                return (<About />)
            }
            else if (currentPage === 'contact'){
                return (
                    <Contact />
                )
            }
            else if(currentPage === 'resume'){
                    return (
                        <Resume />
                    )
            }
            else if(currentPage === 'wedding'||
            currentPage === 'tech-blog'||
            currentPage === 'date'||
            currentPage === 'yoodlize'||
            currentPage === 'weather'||
            currentPage === 'blackjack'
            ) {
                return (
                    <Project />
                )
            }
            else if(currentPage === 'projects'){
               return (
                 <ProjectsPage />
               )
            }
            else {
                return (<About />)
            }
        })()}
        {/* <Project /> */}
    
    </>
   )

}
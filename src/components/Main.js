// import Header from "./components/Header";
// import Footer from "./components/Footer"
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Resume from "./Resume";
import ProjectsPage from "./ProjectsPage";


import { useContext} from 'react';

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
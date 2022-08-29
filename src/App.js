
// import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer"
import Main from "./components/Main";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Resume from "./components/Resume";
import ProjectsPage from "./components/ProjectsPage";

function App() {
  return (
    <div className="font-sans flex flex-col h-screen justify-between"> 
    <Header />
    {/* <Project /> */}
    {/* <ProjectsPage /> */}
    {/* <Resume /> */}
    <div> 
    <Main />
    <Contact />
    </div>
   <Footer />
   </div>
  
  );
 
}

export default App;

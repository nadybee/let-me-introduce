
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer"
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Project from "./components/Project";
// import Resume from "./components/Resume";
// import ProjectsPage from "./components/ProjectsPage";
// import {send} from 'emailjs-com'
import Main from "./components/Main";
import { PortfolioProvider } from './context/PortfolioContext';

function App() {
  return (
    <PortfolioProvider> 
    <div className="font-sans flex flex-col h-screen"> 
    <Header />
   <Main />
   <Footer /> 
   </div>
   </PortfolioProvider>
  );
 
}

export default App;

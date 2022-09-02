import { createContext, useState } from "react";
const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('about')
 



return (
    <PortfolioContext.Provider
      value={{ 
        currentPage,
        setCurrentPage
      
      }}
      >
      {children}
       </PortfolioContext.Provider>
)
    }
    export default PortfolioContext;

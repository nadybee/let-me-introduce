import { createContext, useState } from "react";
const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('about')
  const [toSend, setToSend] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
})
const [submit, setSubmit] =useState(false)



return (
    <PortfolioContext.Provider
      value={{ 
        currentPage,
        toSend,
        submit,
        setCurrentPage,
        setToSend,
        setSubmit

      
      }}
      >
      {children}
       </PortfolioContext.Provider>
)
    }
    export default PortfolioContext;

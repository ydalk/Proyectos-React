import React from 'react';
import Header from '../Header';
import { useLocation } from 'react-router-dom';

const Layout = ({children}) => {

    const location = useLocation();
    
  return (
    <>
        { location.pathname.includes("/register")? null : <Header />}
        { children }
    </>
  )
}

export default Layout
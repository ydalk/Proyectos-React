import React from 'react';
import Header from '../Header';
import { useLocation } from 'react-router-dom';

const Layout = ({children}) => {

    const location = useLocation();
    let doesContainer = location.pathname.includes("register") || location.pathname.includes("login");

  return (
    <>
        { doesContainer ? null : <Header />}
        { children }
    </>
  )
}

export default Layout
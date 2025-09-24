import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'; // Footer component includes newsletter too

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />  { /* This Footer includes both newsletter signup and footer content */ }
    </>
  );
};

export default Layout;

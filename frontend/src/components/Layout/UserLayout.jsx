import React from "react";
import Header from "./../Common/Header";
<<<<<<< HEAD
import Footer from "./../Common/Footer";
=======
import { Outlet } from "react-router";
>>>>>>> Herosection/Ewebapp

const UserLayout = () => {
  return (
    <>
      {/* Header  */}
      <Header />
      {/* Main Content  */}
      <main>
        <Outlet />
      </main>
      {/* Footer  */}
      <Footer />
    </>
  );
};

export default UserLayout;

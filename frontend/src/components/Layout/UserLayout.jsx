import React from "react";
import Header from "./../Common/Header";
import { Outlet } from "react-router";

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
    </>
  );
};

export default UserLayout;

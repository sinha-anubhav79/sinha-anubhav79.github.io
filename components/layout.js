import React, { useEffect } from "react";
import Footer from "./footer";
import NavBar from "./navBar";
import { usePathname } from "next/navigation";

function Layout({ children }) {
  const pathname = usePathname();
  const isHome = pathname == "/";
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;

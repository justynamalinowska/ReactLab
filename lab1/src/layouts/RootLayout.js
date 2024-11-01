import React from "react";
import NavBar from "../components/NavBarMenu";
import Footer from "../components/Footer";

function RootLayout({ items, children }) {
  return (
    <div className="root-layout">
      <NavBar items={items} />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

export default RootLayout;

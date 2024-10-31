import React from "react";
import NavBar from "/Users/justynamalinowska/Documents/ReactLab/lab1/src/components/NavBarMenu.js";
import Footer from "/Users/justynamalinowska/Documents/ReactLab/lab1/src/components/Footer.js";

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

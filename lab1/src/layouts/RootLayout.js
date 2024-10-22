import React from "react";
import NavBarMenu from "../components/NavBarMenu.js";
import Footer from "../components/Footer.js";

const menuItems = [
  { id: 1, label: "Home" },
  { id: 2, label: "Laboratorium 1" },
  { id: 3, label: "Laboratorium 2" },
];

function RootLayout({ children }) {
  return (
    <div>
      <NavBarMenu items={menuItems} />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default RootLayout;

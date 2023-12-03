import * as React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  return (
    <div id="layout">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;

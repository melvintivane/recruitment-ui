import { Suspense } from "react";

import NavBar from "../CommonLayout/NavBar";
import Subscribe from "../CommonLayout/Subscribe";
import Footer from "../CommonLayout/Footer";
import ScrolltoTop from "../../components/ScrolltoTop";
import { ThemeProvider } from "../../context/ThemeContext";

const Layout = (props) => {
  return (
    <ThemeProvider>
      <Suspense>
        <div>
          <NavBar />
          <div className="main-content">
            <div className="page-content">{props.children}</div>
            <Subscribe />
            <Footer />
            <ScrolltoTop />
          </div>
        </div>
      </Suspense>
    </ThemeProvider>
  );
};

export default Layout;

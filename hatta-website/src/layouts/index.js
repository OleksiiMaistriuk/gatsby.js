import * as React from "react";
import Navigation from "../components/Navigation/Navigation";
import GlobalStyles from "../assets/globalStyles";
const MainLayout = ({ children }) => (
  <>
    <GlobalStyles />
    <Navigation />
    {children}
  </>
);

export default MainLayout;

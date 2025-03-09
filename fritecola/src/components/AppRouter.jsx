import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import Bio from "./Bio";
import Home from "./Home";
import Merch from "./Merch";
import React from "react";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      

      <Route
        path="/home"
        element={
          <PageWithHeader>
            <Home />
          </PageWithHeader>
        }
      />
      <Route
        path="/bio"
        element={
          <PageWithHeader>
            <Bio />
          </PageWithHeader>
        }
      />
      <Route
        path="/Merch"
        element={
          <PageWithHeader>
            <Merch />
          </PageWithHeader>
        }
      />
      </Routes>
    </Router>
  );
}

const PageWithHeader = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default AppRouter;

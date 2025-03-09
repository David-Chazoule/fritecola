import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import Bio from "./Bio";
import Home from "./Home";
import Merch from "./Merch";
import React from "react";

function AppRouter() {
  return (
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
        path="/merch"
        element={
          <PageWithHeader>
            <Merch />
          </PageWithHeader>
        }
      />
      <Route
        path="*"
        element={
          <PageWithHeader>
            <h1>404 - Page non trouvée</h1>
          </PageWithHeader>
        }
      />
    </Routes>
  );
}

const PageWithHeader = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default AppRouter;

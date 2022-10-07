import React from "react";
import { Route, Routes } from "react-router-dom";
import GistDetails from "../screens/gistDetails/gistDetails";
import Gists from "../screens/gists/gists";

export const Root = () => {
  return (
    <div className="root">
      <Routes>
        <Route path={"/"} element={<Gists />} />
        <Route path={"/details/:id"} element={<GistDetails />} />
      </Routes>
    </div>
  );
};

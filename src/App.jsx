import { useState } from "react";
import "./App.css";
import AddDonor from "./components/AddDonor";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewDonors from "./components/ViewDonors";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="add" element={<AddDonor />} />
          <Route path="view" element={<ViewDonors />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

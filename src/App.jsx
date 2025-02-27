import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Resources from "./components/Resources";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/html" element={<Resources category="HTML" />} />
        <Route path="/css" element={<Resources category="CSS" />} />
        <Route
          path="/javascript"
          element={<Resources category="JavaScript" />}
        />
        <Route path="/react" element={<Resources category="React" />} />
        <Route
          path="/sanity"
          element={<Resources category="Sanity and headless CMS" />}
        />
      </Routes>
    </Layout>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./App";
import Create from "./pages/createContato/index";
import Update from "./pages/updateContato/index";
import Delete from "./pages/deleteContato/index";
import SearchContatoById from "./pages/searchContatoById/index";



function Rout() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/search-contato" element={<SearchContatoById />} />
      <Route path="/create-contato" element={<Create />} />
      <Route path="/alter-contato" element={<Update />} />
      <Route path="/delete-contato" element={<Delete />} />
    </Routes>
  );
}

export default Rout;

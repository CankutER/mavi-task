import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Form from "./pages/form";
import Preview from "./pages/preview";
import { useState } from "react";

function App() {
  const [formState, setForm] = useState({});
  const [info, setInfo] = useState({});
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setInfo={setInfo} info={info} />} />
        <Route
          path="form"
          element={<Form setForm={setForm} info={info} formState={formState} />}
        />
        <Route
          path="preview"
          element={<Preview formState={formState} info={info} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

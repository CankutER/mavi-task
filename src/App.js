import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Form from "./pages/form";
import Preview from "./pages/preview";
import { useState } from "react";

function App() {
  const [formState, setForm] = useState({});
  const [list, setList] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="form"
          element={
            <Form
              setForm={setForm}
              setList={setList}
              list={list}
              formState={formState}
            />
          }
        />
        <Route
          path="preview"
          element={<Preview formState={formState} list={list} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

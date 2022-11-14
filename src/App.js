import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Form from "./pages/form";
import Preview from "./pages/preview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="form" element={<Form />} />
        <Route path="preview" element={<Preview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

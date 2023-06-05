import { Home, CreatePirate, Pirate, NotFoundPage } from "./pages/index.js";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePirate />} />
        <Route path="/profile/:id" element={<Pirate />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;

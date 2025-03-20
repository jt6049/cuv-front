import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Listing from "./pages/Listing";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import Jobs from "./pages/Jobs";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/edit/:id" element={<Jobs />} />
        <Route path="/listing" element={<Listing />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;

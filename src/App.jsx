import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.scss";
import Homepage from "./pages/dashboard";
import Tournament from "./pages/tournament";
import NotFound from "./pages/miscellaneous/NotFound404";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
import VotingInfo from "./pages/votingInfo";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/voting-info" element={<VotingInfo />} />
      </Routes>
    </Router>
  );
}

export default App;

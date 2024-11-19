import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

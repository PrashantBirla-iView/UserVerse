import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Errorpg from "./Pages/Errorpg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import   Card   from "./Components/Card";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

function App() {
  return (
    <><div className="good">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Login" element={<Login />} />
          <Route path="Main" element={<Main />} />
          <Route path="Footer" element={<Footer />} />
          <Route path="Card" element={<Card />} />
          <Route path="Home" element={<Home />} />
         <Route path="*" element={<Errorpg />} />
        </Routes>
      </BrowserRouter></div>
    </>
  );
}

export default App;

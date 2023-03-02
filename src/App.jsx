import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Error from "./Pages/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Pages/Users";
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
          <Route path="Users" element={<Users />} />
          <Route path="Footer" element={<Footer />} />
          <Route path="Card" element={<Card />} />
          <Route path="Home" element={<Home />} />
         <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter></div>
    </>
  );
}

export default App;

import { Navbar } from "./Components/";
import { AboutScreen, FloodModel, ProfileMap, WebGIS } from "./Pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./auth/login";
import Teams from "./Pages/admin/Teams";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<WebGIS />}></Route>
        <Route path="/FloodModelScreen" element={<FloodModel />}></Route>
        <Route path="/ProfileModelScreen" element={<ProfileMap />}></Route>
        <Route path="/AboutScreen" element={<AboutScreen />}></Route>
        <Route path="/LoginScreen" element={<Login />}></Route>
        <Route path="/admin/kelompok" element={<Teams />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

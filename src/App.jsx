import { AboutScreen, FloodModel, ProfileMap, WebGIS } from "./Pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./auth/login";
import Kamerads from "./Pages/admin/kamerads";
import Gallery from "./Pages/admin/Gallery";
import Message from "./Pages/admin/Messages";
import Stories from "./Pages/admin/Stories";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutScreen />}></Route>
        <Route path="/KurvaS" element={<FloodModel />}></Route>
        <Route path="/ProfileModelScreen" element={<ProfileMap />}></Route>
        <Route path="/WebGIS" element={<WebGIS />}></Route>
        <Route path="/LoginScreen" element={<Login />}></Route>
        <Route path="/admin/kelompok" element={<Kamerads />}></Route>
        <Route path="/admin/gallery" element={<Gallery />}></Route>
        <Route path="/admin/kesanpesan" element={<Message />}></Route>
        <Route path="/admin/story" element={<Stories />}></Route>
        <Route path="/admin/kotakpesan" element={<Stories />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

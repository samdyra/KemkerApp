import { Navbar } from "./Components/";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AboutScreen, FloodModel, ProfileMap, WebGIS } from "./Pages";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <WebGIS></WebGIS>
        </Route>
        <Route exact path="/AboutScreen">
          <AboutScreen></AboutScreen>
        </Route>
        <Route exact path="/FloodModelScreen">
          <FloodModel></FloodModel>
        </Route>
        <Route exact path="/ProfileModelScreen">
          <ProfileMap></ProfileMap>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

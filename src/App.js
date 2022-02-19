import Navbar from "./components/Navbar";
import MainSidebar from "./components/MainSidebar";
import FooterQLT from "./components/FooterQLT";
import Dashboard from "./pages/Dashboard/Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import BusPages from "./pages/BusPages/BusPages";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <MainSidebar />
        <div>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/qlbus" component={BusPages} />
          </Switch>
          <FooterQLT />
        </div>
      </Router>
    </div>
  );
}

export default App;

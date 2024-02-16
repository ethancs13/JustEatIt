import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Navbar/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import SearchComponent from "./components/SearchComponent";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={SearchComponent} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import { Route, Link, Switch } from "react-router-dom";
import MenuItems from "./components/menuItem/MenuItems";
import Shop from "./pages/shop/shop";
import Header from "./components/header/Header";

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/shop" component={Shop} />
        <Route exact path="/" component={HomePage} />
        {/* <HomePage /> */}
      </Switch>
    </div>
  );
}

export default App;

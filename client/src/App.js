import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pay from "./pages/Pay";
import Success from "./pages/Success";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/pay">
          <Pay />
        </Route>

        <Route>
          <Success path="/success"/>
        </Route>
      </Switch>
      {/*<Login/>*/}
      {/*<Register />*/}
      {/*<Cart/>*/}
    </Router>
  );
}

export default App;

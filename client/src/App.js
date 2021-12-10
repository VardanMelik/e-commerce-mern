import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pay from "./pages/Pay";
import Success from "./pages/Success";
import Products from "./components/Products";


function App() {
  const user = true;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/products/:category">
          <ProductList/>
        </Route>
        <Route path="/product/:id">
          <Product/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login/>}
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/"/> : <Register/>}
        </Route>


        {/*<Route exact path="/pay">
          <Pay />
        </Route>

        <Route>
          <Success path="/success"/>
        </Route>*/}
      </Switch>
      {/*<Login/>*/}
      {/*<Register />*/}
      {/*<Cart/>*/}
    </Router>
  );
}

export default App;

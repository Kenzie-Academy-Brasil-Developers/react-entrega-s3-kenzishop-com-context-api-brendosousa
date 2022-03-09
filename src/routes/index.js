import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";
import CartPage from "../pages/CartPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route path="/cart">
        <CartPage />
      </Route>
    </Switch>
  );
};

export default Routes;

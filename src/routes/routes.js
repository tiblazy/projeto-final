import { Routes as Switch, Route } from "react-router-dom";
import ROUTES from "../constants/routes";

export const Routes = () => {
  const { home } = ROUTES;

  return (
    <Switch>
      {/* <Route path={home} element={<Home />} /> */}
    </Switch>
  );
};

import { Routes as Switch, Route } from "react-router-dom";

import Dashboard from "../components/Pages/Dashboard";
import { Login } from "../components/Pages/Login";
import { Register } from "../components/Pages/Register";
import ROUTES from "../constants/routes";
import Home from "../components/Pages/Home";

export const Routes = () => {
  const { home, login, register, tables } = ROUTES;

  return (
    <Switch>
      <Route path={home} element={<Home />} />
      <Route path={login} element={<Login />} />
      <Route path={register} element={<Register />} />
      {/* <Route path={tables(id)} element={<Table page={id} />} /> */}
    </Switch>
  );
};

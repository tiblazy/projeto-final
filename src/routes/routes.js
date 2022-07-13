import { Routes as Switch, Route } from "react-router-dom";

import Table from "../components/Pages/Table";
import { Login } from "../components/Pages/Login";
import { Register } from "../components/Pages/Register";
import ROUTES from "../constants/routes";
import Home from "../components/Pages/Home";
import Character from "../components/Pages/Character";

export const Routes = () => {
  const { home, login, register, tables, characters } = ROUTES;

  return (
    <Switch>
      <Route path={home} element={<Home />} />
      <Route path={login} element={<Login />} />
      <Route path={register} element={<Register />} />
      <Route path={tables} element={<Table />} />
      <Route path={characters} element={<Character />} />
    </Switch>
  );
};

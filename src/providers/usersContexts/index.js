import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { baseAPI } from "../../apis/api";
import {
  userToken,
  getUserToken,
  setUserToken,
  removeUserToken,
} from "../../constants/localStorages";

import ROUTES from "../../constants/routes";
import { toast } from "react-toastify";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [logado, setLogado] = useState(false);
  const [userData, setUserData] = useState([]);

  const toastSuccess = (message, route) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      onClose: navigate(route),
    });
  };

  const toastError = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    const autoLogin = async () => {
      try {
        // const token = JSON.parse(getUserToken);
        // console.log(`bearer ${token}`);
        // const response = await baseAPI.get("/users", {
        //   headers: { Authorization: `bearer ${token}` },
        // });
        // console.log(response);
        // setUser(response.data);
        // navigate(ROUTES.dashboard);
      } catch (error) {
        console.log(error);
        // removeUserToken(userToken);
      }
    };

    if (getUserToken) {
      autoLogin();
      // navigate(ROUTES.dashboard);
    }
  }, []);

  function login(data, setLoading) {
    baseAPI
      .post("/login", data)
      .then((res) => {
        console.log(res.data);

        localStorage.setItem(userToken, JSON.stringify(res.data.accessToken));

        toastSuccess("Login realizado com sucesso!", ROUTES.home);

        setLogado(true);
        setUserData(res.data.user);
      })
      .catch((err) => {
        console.log(err);

        toastError("Login falhou, verifique seu email ou senha!");
      });
  }

  const userCreate = async (data, setLoading) => {
    try {
      setLoading(true);

      const response = await baseAPI.post("/users", data);
      setUserToken(response.data.accessToken);

      if (getUserToken) {
        toastSuccess(
          "Usuário criado com sucesso, redirecionando....",
          ROUTES.dashboard
        );
      }
    } catch (error) {
      toastError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UsersContext.Provider
      value={{ login, userCreate, user, logado, userData, setLogado }}
    >
      {children}
    </UsersContext.Provider>
  );
};

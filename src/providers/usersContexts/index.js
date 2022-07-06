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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

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
        const token = JSON.parse(getUserToken);

        const response = await baseAPI.post(
          "/login",
          {},
          {
            header: {
              Authorization: `bearer ${token}`,
            },
          }
        );

        setUser(response.data);
        navigate(ROUTES.dashboard);
      } catch (error) {
        removeUserToken(userToken);
      }
    };

    if (getUserToken) {
      autoLogin();
    }
  }, []);

  function login() {
    baseAPI
      .post("/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);

        localStorage.setItem(userToken, JSON.stringify(res.data));

        toastSuccess("Login realizado com sucesso!", ROUTES.dashboard);
      })
      .catch((err) => {
        console.log(err);

        toastError("Login falhou, verifique seu email ou senha!");
      });
  }

  const userCreate = async (data, setLoading) => {
    try {
      setLoading(true);

      const hash = `${data.username}#${data.username
        .slice(0, 1)
        .toUpperCase()}-${data.password.slice(0, 2)}`;

      const response = await baseAPI.post("/users", data);
      setUserToken(response.data.accessToken);
      // const redirect = await baseAPI.post("/login", response.data.accessToken);

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
      value={{ setEmail, setPassword, login, userCreate, user }}
    >
      {children}
    </UsersContext.Provider>
  );
};

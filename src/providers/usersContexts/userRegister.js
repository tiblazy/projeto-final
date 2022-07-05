import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { baseAPI } from "../../apis/api";
import {
  userToken,
  getUserToken,
  removeUserToken,
} from "../../constants/localStorages";

import ROUTES from "../../constants/routes";

export const UserRegisterContext = createContext({});

export const UserRegisterProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const defaultTimer = () => 60 * 500;

  useEffect(() => {
    async function autoLogin() {
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
    }

    if (getUserToken) {
      autoLogin();
    }
  }, []);

  const userCreate = async (data, setLoading, setError) => {
    try {
      setLoading(true);
      setError(false);

      await baseAPI.post("/users", data);
    } catch (error) {
      setError(error.response);

      setTimeout(() => {
        setError(false);
      }, defaultTimer);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserRegisterContext.Provider value={{ user, userCreate }}>
      {children}
    </UserRegisterContext.Provider>
  );
};

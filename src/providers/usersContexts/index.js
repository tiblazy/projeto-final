import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseAPI } from "../../apis/api";
import { setUserToken } from "../../constants/localStorages";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function login() {
    axios
      .post(`${baseAPI}/login`, {
        email,
        password,
      })
      .then((res) => {
        setUserToken(res.data.accessToken);

        toast.success("Login realizado com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          onClose: navigate("/dashboard"),
        });
      })
      .catch((err) => {
        console.log(err);

        toast.error("Login falhou, verifique seu email ou senha!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }

  return (
    <UsersContext.Provider value={{ setEmail, setPassword, login }}>
      {children}
    </UsersContext.Provider>
  );
};

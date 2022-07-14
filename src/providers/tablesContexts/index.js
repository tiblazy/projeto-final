import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";

import { baseAPI } from "../../apis/api";
import { getUserToken } from "../../constants/localStorages";

import { toast } from "react-toastify";

import { UsersContext } from "../usersContexts";

export const TablesContext = createContext();

export const TablesProvider = ({ children }) => {
  const [table, setTable] = useState([]);
  const [privateTable, setPrivateTable] = useState([]);
  const { userData, logado } = useContext(UsersContext);

  const navigate = useNavigate();

  const toastSuccess = (message, route = null) => {
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

  useEffect(() => {
    listTables();
  }, [table]);

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

  function listTables() {
    baseAPI.get("/tables").then((response) => {
      response && setTable(response.data);
    });
  }
  listTables();

  function privateListTables() {
    baseAPI
      .get(`/users/${userData.id}?_embed=tables`, {
        headers: {
          Authorization: `Bearer ${getUserToken}`,
        },
      })
      .then((response) => {
        response && setPrivateTable(response.data.tables);
      });
  }

  const Private = privateListTables;

  // const tableCreate = async (data, setLoading) => {
  //   try {
  //     setLoading(true);

  //     const response = await baseAPI.post("/tables", data, {
  //       headers: {
  //         Authorization: `Bearer ${getUserToken}`,
  //       },
  //     });
  //     console.log(response);

  //     if (response.status == 201) {
  //       toastSuccess("Mesa criada com sucesso");
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const tableDelete = async (id, setLoading) => {
    try {
      setLoading(true);

      const response = await baseAPI.delete(`/tables/${id}`, {
        headers: { Authorization: `bearer ${getUserToken}` },
      });
      toastSuccess("Mesa removida com sucesso");
    } catch (error) {
      console.log(error);
      //   toastError(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <TablesContext.Provider
      value={{
        tableDelete,
        table,
        privateTable,
        Private,
      }}
    >
      {children}
    </TablesContext.Provider>
  );
};

import { createContext, useState } from "react";
import { baseAPI } from "../../apis/api";
import { toast } from "react-toastify";
import { userToken } from "../../constants/localStorages";

export const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characterData, setCharacterData] = useState({});

  const toastSuccess = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
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

  function createCharacter() {
    baseAPI
      .post("/character", characterData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        toastSuccess("Personagem criado com sucesso!");
      })
      .catch((err) => {
        toastError("Erro ao criar o personagem.");
      });
  }

  function editCharacter(charId) {
    baseAPI
      .patch(`/character/:${charId}`, characterData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        toastSuccess("Personagem editado com sucesso!");
      })
      .catch((err) => {
        toastError("Erro ao criar personagem");
      });
  }

  function deleteCharacter(charId) {
    baseAPI
      .delete(`/character/:${charId}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        toastSuccess("Personagem deletado");
      })
      .catch((err) => {
        toastError("Erro ao deletar personagem");
      });
  }

  return (
    <CharacterContext.Provider
      value={{
        createCharacter,
        editCharacter,
        deleteCharacter,
        setCharacterData,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

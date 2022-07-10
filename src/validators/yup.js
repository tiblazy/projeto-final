import * as yup from "yup";

export const schemaLogin = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Email inválido")
      .matches(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i, "Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  return schema;
};

export const schemaRegister = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senha não identica"),
  });

  return schema;
};

export const schemaCharacter = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    class: yup.string().required("Classe obrigatória"),
    lore: yup.string().required("Lore obrigatória"),
    photo: yup.string().optional(),
  });
};

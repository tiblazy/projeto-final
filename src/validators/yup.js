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

// Modal Table

export const schemaCreateTable = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    system: yup.string().required("Sistema obrigatório"),
    password: yup.string(),
    confirmPass: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não correspondem"),
  });

  return schema;
};

export const schemaPassword = () => {
  const schema = yup.object().shape({
    password: yup.string(),
  });

  return schema;
};

export const schemaCharacter = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    class: yup.string().required("Classe obrigatória"),
    email: yup.string().email().required("Email obrigatório"),
    avatar: yup.string().optional(),
  });

  return schema;
};

export const schemaParticipant = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Nome obrigatório"),
    email: yup.string().email("Formato inválido").required("Email obrigatório"),
  });

  return schema;
};

export const schemaEditProfile = () => {
  const schema = yup.object().shape({
    username: yup.string().optional(),
    email: yup.string().optional(),
    avatar: yup.string().optional(),
  });

  return schema;
};

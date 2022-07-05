export const userToken = "@HELLFIRE/userAccess";

export const getUserToken = localStorage.getItem(userToken);
export const setUserToken = (token) =>
  localStorage.setItem(userToken, JSON.stringify(token));
export const removeUserToken = localStorage.removeItem(userToken);

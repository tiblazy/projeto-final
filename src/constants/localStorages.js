export const userToken = "@HELLFIRE/userAccess";
export const userListTables = "@HELLFIRE/userTableList";
export const currentID = "@HELLFIRE/userID"; 
export const currentUsername = "@HELLFIRE/username";

export const getUserToken = JSON.parse(localStorage.getItem(userToken));
export const setUserToken = (token) =>
  localStorage.setItem(userToken, JSON.stringify(token));

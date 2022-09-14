import { AUTH_TOKEN } from "./constants";

export const getItemFromLocalStorage = (key) => localStorage.getItem(key);

export const getToken = () => getItemFromLocalStorage(AUTH_TOKEN);

import axios, { AxiosError } from "axios";

export const api = axios.create({
  // baseURL: "https://62584f320c918296a49543e7.mockapi.io",
  baseURL: "https://next-v1-notes-api.goit.study/",
  withCredentials: true,
});

export type ApiError = AxiosError<{ error: string }>;

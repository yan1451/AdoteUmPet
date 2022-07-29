import axios from "axios";
import { adocao } from "../@types/adocao";
import { pet } from "../@types/pet";

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const requestData = async(endpoint: string) => {
  const { data } = await api.get(endpoint);
  return data;
}

export const createData = async(endpoint: string, body: adocao) => {
  const { data } = await api.post(endpoint, body);
  return data;
}
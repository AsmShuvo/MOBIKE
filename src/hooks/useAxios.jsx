import axios from "axios";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;
const axios_ = axios.create({
  baseURL: `${SERVER_URL}`,
});
const useAxios = () => {
  return axios_;
};

export default useAxios;

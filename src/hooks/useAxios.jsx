import axios from "axios";

const axios_ = axios.create({
  baseURL: "http://localhost:3000",
});
const useAxios = () => {
  return axios_;
};

export default useAxios;

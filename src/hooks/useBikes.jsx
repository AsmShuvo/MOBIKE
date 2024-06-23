import React from "react";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useBikes = () => {
  const axios = useAxios();
  const { data: bikes = [], refetch: bikesLoading } = useQuery({
    queryKey: ["bikes"],
    queryFn: async () => {
      const res = await axios.get("/bikes");
      return res.data;
    },
  });
  console.log("All bikes", bikes);
  return [bikes, bikesLoading];
};

export default useBikes;

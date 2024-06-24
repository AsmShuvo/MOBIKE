import React from "react";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useBikes = () => {
  const axios = useAxios();
  const { data: bikes = [], refetch: bikesLoading, refetch: bikeRefetch } = useQuery({
    queryKey: ["bikes"],
    queryFn: async () => {
      const res = await axios.get("/bikes");
      return res.data;
    },
  });
  // console.log("All bikes", bikes);
  return [bikes, bikesLoading, bikeRefetch];
};

export default useBikes;

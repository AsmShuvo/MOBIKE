import { AuthContext } from "../Providers/AuthProviders";
import { useContext, useEffect, useState } from "react";
import useAxios from "./useAxios";

export const useAdmin = () => {
    const axios = useAxios();
    const { user } = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`/users`).then((response) => {
            const users = response.data;
            console.log(users)
            const curUser = users.find((u) => u.email === user?.email);
            console.log("cur user: ", curUser);
            setIsAdmin(curUser?.role === "admin");
            setLoading(false);
        });
    }, [axios, user]);
    console.log(isAdmin);

    return { isAdmin, loading };
};
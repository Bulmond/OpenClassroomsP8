import { useState, useEffect } from "react";

export function useAuth() {
    const [connectedUser, setConnectedUser] = useState(null);
    const [auth, setAuth] = useState(false);
    const [userLoading, setUserLoading] = useState(true);

    useEffect(() => {
        async function getUserDetails() {
            const { authenticated, user } = await getAuthenticatedUser();
            setConnectedUser(user);
            setAuth(authenticated);
            setUserLoading(false);
        }
        getUserDetails();
    }, []);

    return { connectedUser, auth, userLoading };
}

async function getAuthenticatedUser() {
    const defaultReturnObject = { authenticated: false, user: null };
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            return defaultReturnObject;
        }
        return { authenticated: true, user: token };
    } catch (err) {
        console.error("getAuthenticatedUser, Something Went Wrong", err);
        return defaultReturnObject;
    }
}

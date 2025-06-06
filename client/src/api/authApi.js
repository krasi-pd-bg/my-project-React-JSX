import { useEffect } from "react";
import { useContext } from "react";
import * as request from "./requester";
import { UserContext } from "../contexts/userContext";
import { useRef } from "react";

const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {
    const abortRef = useRef(new AbortController());

    const login = async (email, password) =>
        request.post(
            `${baseUrl}/login`,
            { email, password },
            { signal: abortRef.current.signal }
        );

    useEffect(() => {
        const abortController = abortRef.current;

        return () => abortController.abort();
    }, []);
    
            return {
            login,
        }    
};

export const useRegister = () => {
    const register = (email, password) =>
        request.post(
            `${baseUrl}/register`,
            { email, password });

    return {
        register,
    }
};

export const useLogout = () => {
    const { accessToken, userLogoutHandler } = useContext(UserContext);

    useEffect(() => {
        if (!accessToken) {
            console.log("no access token");
            return;
        }
        
        const options = {
            headers: {
                'X-Authorization': accessToken,
            }
        };

        request.get(`${baseUrl}/logout`, null, options)
            .then(userLogoutHandler);

    }, [accessToken, userLogoutHandler]);

    return {
        isLoggedOut: !!accessToken,
    };
};

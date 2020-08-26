import { AuthConsts } from "../constants";
import { userService } from "../services";
import { useHistory } from "react-router-dom";

export const useAuthActions = () => {
    const history = useHistory();

    const login = (username: string, password: string) => {
        userService.login(username, password).then(({ data: { auth } }) => {
            localStorage.setItem("user", JSON.stringify(username));
            history.replace("/");
            console.log("Login Repsonse: ", auth);
            return auth;
        });
    };

    function logout() {
        userService.logout();
        return { type: AuthConsts.LOGOUT };
    }

    function register(user: string) {}

    return { login, logout, register };
};

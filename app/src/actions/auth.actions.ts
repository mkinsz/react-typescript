import { AuthConsts } from "../constants";
import { userService } from "../services";
import { history } from "../helpers";

export const userActions = {
    login,
    logout,
    register,
};

function login(username: string, password: string) {
    return (dispatch: any) => {
        // dispatch(request({ name: username }));
        // userService.login(username, password)
        //     .then(
        //         user => {
        //             dispatch(success(user));
        //             history.push('/');
        //         },
        //         error => {
        //             dispatch(failure(error.toString()));
        //             dispatch(alertActions.error(error.toString()));
        //         }
        //     );
    };

    function request(user: string) {
        return { type: AuthConsts.LOGIN_REQUEST, user };
    }
    function success(user: string) {
        return { type: AuthConsts.LOGIN_SUCCESS, user };
    }
    function failure(error: string) {
        return { type: AuthConsts.LOGIN_FAILURE, error };
    }
}

function logout() {
    userService.logout();
    return { type: AuthConsts.LOGOUT };
}

function register(user: string) {}

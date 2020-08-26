import graphQLFetcher from "./service";

export const userService = {
    login,
    logout,
    register,
};

function login(username: string, password: string) {
    const query = `{ auth(input: { email: "${username}", password: "${password}" }) }`;
    return graphQLFetcher({ query }).then(handleResponse);
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("user");
}

function register() {}

function handleResponse(response: Response) {
    return response.text().then((text) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

const graphQLFetcher = (graphQLParams: object) => {
    return fetch("http://127.0.0.1:8080/graphql", {
        method: "post",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(graphQLParams),
        // credentials: 'include'
    })
        .then(function (response) {
            return response.text();
        })
        .then(function (responseBody) {
            try {
                return JSON.parse(responseBody);
            } catch (error) {
                return responseBody;
            }
        });
};

export default graphQLFetcher;

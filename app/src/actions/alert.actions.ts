import { AlertConsts } from "../constants";

export const alertActions = {
    success,
    error,
    clear,
};

function success(message: string) {
    return { type: AlertConsts.SUCCESS, message };
}

function error(message: string) {
    return { type: AlertConsts.ERROR, message };
}

function clear() {
    return { type: AlertConsts.CLEAR };
}

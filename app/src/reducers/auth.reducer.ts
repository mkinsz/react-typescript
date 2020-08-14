import { AuthConsts } from "../constants";

export function registration(state = {}, action: { type: string }) {
    switch (action.type) {
        case AuthConsts.REGISTER_REQUEST:
            return { registering: true };
        case AuthConsts.REGISTER_SUCCESS:
            return {};
        case AuthConsts.REGISTER_FAILURE:
            return {};
        default:
            return state;
    }
}

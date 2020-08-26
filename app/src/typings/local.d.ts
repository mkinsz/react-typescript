export {};

declare module "react-redux";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: Function;
        TRS_STORE: any;
    }
}

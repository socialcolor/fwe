import { store } from "../store";

export type Data = {
    FormSendingSucces: boolean,
    FormSendingError: boolean,
    disabledForm: boolean,
}

export type Form = {
    formName: string,
    name: string,
    email: string,
    phone: string,
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

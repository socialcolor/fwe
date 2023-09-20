import { State } from "../types/state";

export const getDisabledForm = () => (state: State) => state.dataSlice.disabledForm;
export const getSuccesSendForm = () => (state: State) => state.dataSlice.FormSendingSucces;
export const getErrorSendForm = () => (state: State) => state.dataSlice.FormSendingError;

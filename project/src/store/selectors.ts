import { State } from "../types/state";

export const getSuccesSendForm = () => (state: State) => state.dataSlice.FormSendingSucces;

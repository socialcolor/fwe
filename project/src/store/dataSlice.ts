import { createSlice } from '@reduxjs/toolkit'
import { Data } from '../types/state';
import { sendForm } from './asyncActions';


const initialState: Data = {
    FormSendingSucces: false,
    FormSendingError: false,
    disabledForm: false,
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        changeFormSendingSucces: (state) => {
            state.FormSendingSucces = !state.FormSendingSucces
        }
    },
    extraReducers: (builder) => {
        builder.addCase(sendForm.pending, (state) => {
            state.FormSendingSucces = false;
            state.disabledForm = true;
        })
        builder.addCase(sendForm.fulfilled, (state) => {
            state.disabledForm = false;
            state.FormSendingSucces = true;
            state.FormSendingError = false;
        })
        builder.addCase(sendForm.rejected, (state) => {
            state.disabledForm = false;
            state.FormSendingError = true;
        })
    }
})


export const { changeFormSendingSucces: changeFormSendingStatus } = dataSlice.actions;

export default dataSlice.reducer;

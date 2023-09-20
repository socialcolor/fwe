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
        changeSendingFormStatus: (state, action) => {
            state.FormSendingSucces = action.payload
        },
        changeErorFormStatus: (state, action) => {
            state.FormSendingError = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(sendForm.pending, (state) => {
            state.disabledForm = true;
        })
        builder.addCase(sendForm.fulfilled, (state) => {
            state.disabledForm = false;
            state.FormSendingSucces = true;
            state.FormSendingError = false;
        })
        builder.addCase(sendForm.rejected, (state) => {
            state.disabledForm = false;
            state.FormSendingSucces = false;
            state.FormSendingError = true;
        })
    }
})


export const { changeSendingFormStatus, changeErorFormStatus } = dataSlice.actions;

export default dataSlice.reducer;

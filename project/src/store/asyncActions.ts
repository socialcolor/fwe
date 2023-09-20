import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Endpoints } from '../const';
import { Form } from '../types/state';

export const sendForm = createAsyncThunk(
    'data/SendForm',
    async ({formName, name, email, phone}:Form) => {
        const { data } = await axios.post(Endpoints.sendForm, {
            formName: formName,
            name: name,
            email: email,
            phone: phone,
        })
        return data;
    }
)

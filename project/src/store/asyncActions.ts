import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Endpoints } from '../const';
import { Form } from '../types/state';

export const sendForm = createAsyncThunk(
    'data/SendForm',
    async ({name, email, phone}:Form) => {
        const { data } = await axios.post(Endpoints.sendForm, {
            name: name,
            email: email,
            phone: phone,
        })
        return data;
    }
)

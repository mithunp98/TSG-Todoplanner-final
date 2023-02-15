import axios from 'axios';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const loginUser = async (username: string, password: string) => {

    try {
        const response = await axios.post('http://localhost:3000/auth/login', {
            username: username,
            password: password,
        });
        const data = response.data;
        if (!data.data.accessToken) {
            alert('wrong');
        } else {

            sessionStorage.setItem('token', data.data.accessToken);
            sessionStorage.setItem('username', data.data.username);
        }
        return data;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
};

export default loginUser;

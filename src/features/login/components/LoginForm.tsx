import React from 'react';
import '../assets/LoginForm.css';
import { userLogin } from '../../../slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [inputUserName, setInputUserName] = useState<string>("");
    const [inputPassword, setInputPassword] = useState<string>("");

    function handleLogin(loginInfo: any) {
        dispatch(userLogin(loginInfo));
        navigate('/blogs');
    }

    return (
    <div className='loginForm'>
        <h1>Login</h1>
        <input type='text' value={inputUserName} onChange={(e) => setInputUserName(e.target.value)} placeholder='username'></input>
        <input type='password' value={inputPassword} onChange={(e) => setInputPassword(e.target.value)} placeholder='password'></input>
        <button className='loginButton' onClick={() => handleLogin({inputUserName, inputPassword})}>Login</button>
    </div>
    )
}

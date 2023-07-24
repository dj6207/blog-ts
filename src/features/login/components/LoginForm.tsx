import React from 'react';
import '../assets/LoginForm.css';
import { userLogin } from '../../../slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginData } from '../../../types';

export default function LoginForm() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [inputUserName, setInputUserName] = useState<string>("");
    const [inputPassword, setInputPassword] = useState<string>("");

    function handleLogin(loginInfo: LoginData) {
        // Use useNavigate when you are going to the page with side effects
        if (loginInfo.inputUserName !== "" && loginInfo.inputPassword !== "") {
            dispatch(userLogin(loginInfo));
            navigate(`/${loginInfo.inputUserName}/blogs`);
        }
    }

    return (
    <div className='login'>
        <form className='loginForm'>
            <h1 className='loginTitle'>Login</h1>
            <input
                type='text'
                value={inputUserName}
                onChange={(e) => setInputUserName(e.target.value)}
                placeholder='Username'
                className='loginInput'
                required
            />
            <input
                type='password'
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                placeholder='Password'
                className='loginInput'
                required
            />
            <button 
                type='submit'
                className='loginButton' onClick={() => handleLogin({inputUserName, inputPassword})}>
                Login
            </button>
        </form>
    </div>
    )
}

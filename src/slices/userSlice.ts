import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../types';

const initialState: UserState = {
    userName: '',
    password: '',
    loggedIn: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLogin: (state, actions) => {
            // it may look like I am modifying the current state without making a copy first
            // which violates the rules of Redux but under the hood Redux tool kit uses immer
            // which handles the making a copy and modifying the copy part
            const { inputUserName, inputPassword } = actions.payload;
            state.loggedIn = true;
            state.userName = inputUserName;
            state.password = inputPassword;
        },
        userLogout: (state) => {
            state.loggedIn = false;
            state.userName = '';
            state.password = '';
        }
    }
});

export const { userLogin, userLogout } = userSlice.actions;
export default userSlice.reducer;
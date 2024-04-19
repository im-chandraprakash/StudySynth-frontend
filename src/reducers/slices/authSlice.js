import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("token")
        ? JSON.parse(localStorage.getItem("token"))
        : null,
    loading: false,
    signupData: null,
};

const authSlice = createSlice({
    name: "authSlice",
    initialState: initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;

            localStorage.setItem("token", JSON.stringify(action.payload));
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setSignupData: (state, action) => {
            state.signupData = action.payload;
        },
    },
});

export const { setToken, setSignupData } = authSlice.actions;
export default authSlice.reducer;
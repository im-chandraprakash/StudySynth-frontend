import { createSlice } from "@reduxjs/toolkit";
import { clearUser } from "./profileSlice";

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
        logout: (state, action) => {
            localStorage.removeItem("token");
            const navigate = action.payload;
            state.token = null;
            clearUser();
        },
    },
});

export const { setToken, setSignupData, logout, setLoading } =
    authSlice.actions;
export default authSlice.reducer;

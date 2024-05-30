import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : null,
    loading: false,
};
const profileSlice = createSlice({
    name: "profileSlice",
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        clearUser : (state , action) =>{
            state.user = null;
            localStorage.removeItem('user');
        }
    },
});

export const { setUserData, setLoading , clearUser } = profileSlice.actions;
export default profileSlice.reducer;

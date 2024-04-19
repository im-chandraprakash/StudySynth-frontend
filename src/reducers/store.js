import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import profileReducer from "./slices/profileSlice";
import contentReducer from "./slices/contentSlice";

export default configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
        content: contentReducer,
    },
});

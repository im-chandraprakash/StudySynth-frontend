import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    step: 1,
    loading: false,
    contentInfo: "",
    content: "",
    editCourse: false,
};
const contentSlice = createSlice({
    name: "contentSlice",
    initialState: initialState,
    reducers: {
        setContentInfo: (state, action) => {
            state.contentInfo = action.payload;
        },
        setContent: (state, action) => {
            state.content = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setStep: (state, action) => {
            state.step = action.payload;
        },
        setEditCourse: (state, action) => {
            state.editCourse = action.payload;
        },
        resetContentState: (state, action) => {
            state.step = 1;
            state.loading = false;
            state.contentInfo = "";
            state.content = "";
        },
    },
});

export const {
    setContent,
    setContentInfo,
    setStep,
    resetContentState,
    setEditCourse,
} = contentSlice.actions;
export default contentSlice.reducer;

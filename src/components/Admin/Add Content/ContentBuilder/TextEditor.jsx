import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";
import PublishContent from "../Publish Content/PublishContent";
import {
    setContent,
    setEditCourse,
    setStep,
} from "../../../../reducers/slices/contentSlice";
import { useDispatch, useSelector } from "react-redux";
import textEditorConfig from "../../../../data/TextEditorConfig";

function TextEditor() {
    const [value, setValue] = useState("");
    const { editCourse, content } = useSelector((state) => state.content);
    const dispatch = useDispatch();

    const modules = {
        toolbar: textEditorConfig,
    };

    function handleSubmit() {
        dispatch(setContent(value));
        dispatch(setStep(3));
    }

    useEffect(() => {
        if (editCourse) {
            setValue(content);
            dispatch(setEditCourse(false));
        }
    }, []);

    return (
        <div className="">
            <ReactQuill
                modules={modules}
                theme="snow"
                value={value}
                onChange={setValue}
            />

            <div className="flex justify-around">
                <button
                    className="button mt-3"
                    onClick={() => {
                        dispatch(setStep(1));
                        dispatch(setEditCourse(true));
                    }}
                >
                    Prev
                </button>
                <button className="button mt-3" onClick={handleSubmit}>
                    Go to Next
                </button>
            </div>
        </div>
    );
}

export default TextEditor;

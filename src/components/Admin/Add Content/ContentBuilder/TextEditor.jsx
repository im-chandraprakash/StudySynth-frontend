import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";
import PublishContent from "../Publish Content/PublishContent";
import {
    setContent,
    setEditCourse,
    setStep,
} from "../../../../reducers/slices/contentSlice";
import { useDispatch } from "react-redux";

const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    ["link", "image", "formula"],
    // [{ header: 1 }, { header: 2 }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ["clean"],
];

function TextEditor() {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    const modules = {
        toolbar: toolbarOptions,
    };

    function handleSubmit() {
        dispatch(setContent(value));
        dispatch(setStep(3));
    }

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

import React, { useState } from "react";
import "./PublishContent.css";
import { useDispatch, useSelector } from "react-redux";
import { createContentAPI } from "../../../../services/operations/adminAPI";
import {
    resetContentState,
    setEditCourse,
    setStep,
} from "../../../../reducers/slices/contentSlice";

function PublishContent() {
    const { content } = useSelector((state) => state.content);
    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useDispatch();

    const formData = useSelector((state) => state?.content?.contentInfo);

    const goToBack = async () => {
        dispatch(setStep(2));
        dispatch(setEditCourse(true));
    };
    const handlePublish = async () => {
        if (isChecked) {

            formData.append("content", content);
            formData.append("contentType", "Topic");

            const result = await createContentAPI(formData);

            if (result) {
                dispatch(resetContentState());
            }
        }
    };

    return (
        <div className="w-full max-w-full mx-auto h-full content-viewer">
            {/* <div>{content}</div> */}

            <div className="mt-5">
                <div dangerouslySetInnerHTML={{ __html: content }} />

                <div className="text-lg border px-4 py-2 rounded-md bg-colorLightBlack">
                    <label htmlFor="confirm ">
                        <p className="font-semibold text-[#a9ad51]">
                            Please Verify : Wheather content is Valid or not
                        </p>
                    </label>

                    <div className="flex gap-2 items-center -mt-5">
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                            className="text-2xl"
                        />
                        <p className="mt-3">Everything is correct</p>
                    </div>
                </div>

                <div>
                    <button className="button" onClick={handlePublish}>
                        Submit
                    </button>

                    <button className="button" onClick={goToBack}>
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PublishContent;

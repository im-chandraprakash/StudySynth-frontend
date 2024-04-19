import React, { useState } from "react";
import "./PublishContent.css";
import { useDispatch, useSelector } from "react-redux";
import { createContentAPI } from "../../../../services/operations/adminAPI";
import { resetContentState } from "../../../../reducers/slices/contentSlice";

function PublishContent() {
    
    const { content } = useSelector((state) => state.content);
    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useDispatch();

    const formData = useSelector((state) => state?.content?.contentInfo);

    const handlePublish = async () => {
        if (isChecked) {
            formData.append("content", content);
            formData.append("contentType", "Topic");

            const getAccuracy = JSON.parse(localStorage.getItem("accuracy"));

            let accu = "";
            if (!getAccuracy) {
                accu = "73%";
                formData.append("accuracy", accu);
                localStorage.removeItem("accuracy");
                localStorage.setItem("accuracy", JSON.stringify(true));
            } else {
                accu = "15%";
                formData.append("accuracy", accu);
                localStorage.removeItem("accuracy");
                localStorage.setItem("accuracy", JSON.stringify(false));
            }

            console.log("Testing accuracy is : ", accu);
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

                <button className="button" onClick={handlePublish}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default PublishContent;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContentInformation from './Content Information/ContentInformation.jsx'
import TextEditor from "./ContentBuilder/TextEditor.jsx";
import PublishContent from "./Publish Content/PublishContent.jsx";

const steps = [
    {
        id: 1,
        title: "Add Content Information",
    },
    {
        id: 2,
        title: "Write Content Here",
    },
    {
        id: 3,
        title: "Publish Content",
    },
];
function RenderSteps() {
    const { step } = useSelector((state) => state.content);

    useEffect(() => {
        console.log(step);
    }, []);

    return (
        <div className="mx-auto w-full h-full ">
            <div className="">
                {steps.map((title, id) => (
                    <div key={id}>
                        {title.id == step ? (
                            <h1 className="font-semibold text-2xl">
                                Step {title.id} : {title.title}
                            </h1>
                        ) : (
                            ""
                        )}
                    </div>
                ))}
            </div>

            <div className="flex justify-center items-center">
                {step == 1 && <ContentInformation />}
                {step == 2 && <TextEditor />}
                {step == 3 && <PublishContent />}
            </div>
        </div>
    );
}

export default RenderSteps;

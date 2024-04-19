import React from "react";
import { useSelector } from "react-redux";

function ViewContents() {
    const { content } = useSelector((state) => state.content);

    console.log(content);
    return (
        <div className="w-full max-w-full mx-auto h-full content-viewer">
            <div className="mt-5">
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    );
}

export default ViewContents;

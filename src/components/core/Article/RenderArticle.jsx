import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleArticle } from "../../../services/operations/ContentAPI";
import "../../Admin/Add Content/Publish Content/PublishContent.css";
function RenderArticle() {
    const { contentId } = useParams();

    const [contentData, setContentData] = useState();
    const [content, setContent] = useState();

    const fetchData = async () => {
        const data = await fetchSingleArticle({ contentId });

        if (data) {
            setContentData(data);
            if (data?.content) {
                setContent(data?.content);
            }
        }
    };

    useEffect(() => {
        fetchData();
        console.log(contentData, "is here");
    }, [contentId]);

    return (
        <div className=" w-full h-full ">
            <div className="w-full p-2  border-b-2 border-t-0 border-l-0 border-r-0 border-white">
                <h1 className="text-2xl font-semibold">{contentData?.title}</h1>
            </div>
            <div>
                {content && (
                    <div className="mt-5 content-viewer ">
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default RenderArticle;

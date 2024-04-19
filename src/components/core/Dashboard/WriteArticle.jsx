import React, { useState } from "react";
import { Link } from "react-router-dom";
import Index from "../../Admin/Add Content/Index";
function WriteArticle() {
    const [start, setStart] = useState(null);
    return (
        <div className="w-full max-w-maxContent mx-auto">
            {!start ? (
                <div>
                    <h1 className="text-3xl font-semibold mt-10">
                        Start Writing Articles
                    </h1>
                    <ul className="mt-10 list-disc flex flex-col gap-2 ml-5">
                        <li>Understand your audience thoroughly.</li>
                        <li>Define clear goals for your content.</li>
                        <li>Research relevant and trending topics.</li>
                        <li>Create a structured content calendar.</li>
                        <li>Prioritize quality over quantity.</li>
                        <li>
                            Experiment with engaging formats (videos,
                            infographics, etc.).
                        </li>
                        <li>Optimize content for search engines (SEO).</li>
                        <li>Provide actionable insights and solutions.</li>
                        <li>Foster interaction and community engagement.</li>
                        <li>Measure performance with analytics tools.</li>
                    </ul>

                    <div className="center mt-14 ml-14 justify-start">
                        <button
                            className="button"
                            onClick={() => setStart(true)}
                        >
                            {" "}
                            Start{" "}
                        </button>
                    </div>
                </div>
            ) : (
                <Index />
            )}
        </div>
    );
}

export default WriteArticle;

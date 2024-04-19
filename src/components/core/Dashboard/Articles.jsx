import React from "react";
import { Link } from "react-router-dom";

function Articles() {
    return (
        <div className="w-full max-w-maxContent mx-auto">
            <div>
                <h1 className="text-3xl font-semibold mt-10">
                    Start Writing Articles
                </h1>
                <div className="mt-10">
                    <h2>It is Empty</h2>
                    <p>User has not written any Article yet</p>
                </div>
            </div>
        </div>
    );
}

export default Articles;

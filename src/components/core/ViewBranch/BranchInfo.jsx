import React from "react";

function BranchInfo({ branchData }) {
    // console.log("data inside the BranchInfo", branchData);
    return (
        <div className="text-white pt-16">
            <div className="border-1 border-white p-4 rounded-md">
                <h1 className="text-3xl font-semibold my-2">
                    {branchData?.name}
                </h1>
                <p>{branchData?.description}</p>
            </div>
        </div>
    );
}

export default BranchInfo;

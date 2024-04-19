import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function SemesterItems({ semesters, branchKey }) {
    const { semesterId } = useParams();
    const navigate = useNavigate();

    return (
        <div className=" w-full h-full p-4 border-1 border-white flex justify-center  flex-col">
            {semesters?.map((semester) => (
                <label key={semester?._id} className="block mb-2">
                    <input
                        type="radio"
                        value={semester._id}
                        checked={semesterId === semester?._id}
                        onChange={() =>
                            navigate(`/branch/${branchKey}/${semester?._id}`)
                        }
                        className="mr-2"
                    />
                    {semester.name}
                </label>
            ))}
        </div>
    );
}

export default SemesterItems;

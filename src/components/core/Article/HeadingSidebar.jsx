import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchCompleteInfoOfSubject } from "../../../services/operations/SubjectAndBranch";
import { TiArrowSortedUp } from "react-icons/ti";
import { FaCaretDown } from "react-icons/fa";

const unit = [1, 2, 3, 4, 5];

function HeadingSidebar() {
    const { subjectKey, contentId } = useParams();
    const [subjectData, setSubjectData] = useState();

    const [expandedUnits, setExpandedUnits] = useState([1]);

    const toggleUnit = (unitNum) => {
        if (expandedUnits.includes(unitNum)) {
            // If the unit is already expanded, collapse it
            setExpandedUnits(expandedUnits.filter((unit) => unit !== unitNum));
        } else {
            // If the unit is not expanded, expand it
            setExpandedUnits([...expandedUnits, unitNum]);
        }
    };

    const fetchData = async () => {
        const data = await fetchCompleteInfoOfSubject({ subjectKey });

        if (data) {
            setSubjectData(data);
        }

        console.log("data set : ", subjectData);
    };

    useEffect(() => {
        fetchData();
        console.log("params is ", subjectKey);
    }, []);
    return (
        <div className=" w-[350px] bg-[#162739] mt-14">
            <div className="center mb-5 my-5 font-semibold text-2xl">
                <h1>{subjectData?.name}</h1>
            </div>
            <div className="flex flex-col  gap-2 p-3 py-3">
                {/* {unit.map((unitNum, id) => (
                    <div key={id} className="flex flex-col  gap-2 p-3 py-3">
                        <h1>{`Unit-${unitNum}`}</h1>
                        {subjectData &&
                            subjectData[`unit${unitNum}`]?.map((item, id) => (
                                <Link
                                    key={id}
                                    to={`article/${subjectKey}/${item._id}`}
                                    className={` ${
                                        contentId == item?._id
                                            ? "bg-gray-600 border-l-[10px] border-colorWhite font-semibold text-colorWhite text-center py-1 px-2"
                                            : ""
                                    }`}
                                >
                                    <p>{item.title}</p>
                                </Link>
                            ))}
                    </div>
                ))} */}

                {unit.map((unitNum) => (
                    <div key={unitNum} className="flex flex-col gap-2 p-3 py-1">
                        <button
                            onClick={() => toggleUnit(unitNum)}
                            className="  text-white font-semibold py-2 px-4 rounded inline-flex items-center broder-1 border-white"
                        >
                            <div className=" w-full flex justify-between">
                                <h1>Unit {unitNum}</h1>

                                <div className="center">
                                    {expandedUnits.includes(unitNum) ? (
                                        <FaCaretDown />
                                    ) : (
                                        <TiArrowSortedUp />
                                    )}
                                </div>
                            </div>
                        </button>
                        {expandedUnits.includes(unitNum) && (
                            <div className="flex flex-col gap-2 p-3 py-3">
                                {subjectData &&
                                    subjectData[`unit${unitNum}`].map(
                                        (item, id) => (
                                            <Link
                                                key={id}
                                                to={`article/${subjectKey}/${item._id}`}
                                                className={`${
                                                    contentId === item?._id
                                                        ? "bg-gray-600 border-l-[10px] border-colorWhite font-semibold text-colorWhite text-center py-1 px-2"
                                                        : ""
                                                }`}
                                            >
                                                <p>{item.title}</p>
                                            </Link>
                                        )
                                    )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HeadingSidebar;

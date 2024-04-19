import React from "react";
import { Link } from "react-router-dom";

function CarousalSlide({ slideData }) {
    console.log("Home carousel data", slideData);

    let firstId = slideData?.semesters ? slideData?.semesters[0]?._id : "abc";

    return (
        <Link
            to={`branch/${slideData?.key}/${slideData?.semesters[0]?._id}`}
            className="w-full h-full cursor-pointer flex items-center flex-col gap-y-3 mt-5 "
        >
            <div className="w-[400px] h-[85%]">
                <img
                    src={slideData?.image}
                    alt={slideData?.name}
                    className="h-full w-full rounded-md"
                />
            </div>
            <h2 className="font-semibold text-[20px]">{slideData?.name}</h2>
        </Link>
    );
}

export default CarousalSlide;

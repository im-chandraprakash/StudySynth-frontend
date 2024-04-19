import React from "react";
import { Link } from "react-router-dom";

function SubjectCard({ subject }) {
    return (
        <Link to={`/article/${subject?.key}/${subject?.unit1[0]}`}>
            <div className="h-[230px] cursor-pointer w-[320px]  z-0 rounded-md center font-semibold text-[20px] bg-[url('https://t4.ftcdn.net/jpg/04/84/11/15/360_F_484111532_W0WOkKeXQzF75XusA7R8e3llIDXqyCFm.jpg')] bg-center bg-cover">
                <h1 className="text-[#ffffffdc] z-20">{subject?.name}</h1>
            </div>
        </Link>
    );
}

export default SubjectCard;

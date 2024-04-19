import React, { useEffect, useState } from "react";
import SubjectCard from "../Home/SubjectCard";

function ViewSubejcts({ subjects }) {
    return (
        <div className="p-10 flex flex-wrap">
            {subjects &&
                subjects?.map((sub, id) => (
                    <SubjectCard subject={sub} key={id} />
                ))}
        </div>
    );
}

export default ViewSubejcts;

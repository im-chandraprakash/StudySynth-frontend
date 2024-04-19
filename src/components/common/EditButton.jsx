import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";
function EditButton() {
    return (
        <div>
            <Link to={"/dashboard/settings"} className="flex gap-2 justify-center items-center  bg-gradient-to-r from-colorRoyalBlue from-40% to-colorLightPurple text-white rounded-md p-2 px-4 text-xl">
                <p>Edit</p>
                <MdOutlineEdit />
            </Link>
        </div>
    );
}

export default EditButton;

import React, { useEffect, useState } from "react";
import image from "../../../assets/User.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { logout } from "../../../reducers/slices/authSlice";
import { useDispatch } from "react-redux";
function ProfileDropDown() {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLinkVisible = () => {
        setOpen(!open);
    };

    

    return (
        <div className=" relative flex items-center justify-center cursor-pointer">
            <div
                onClick={() => handleLinkVisible()}
                className="flex justify-center items-center"
            >
                <div>
                    <img
                        src={image}
                        alt="user image"
                        width="40px"
                        height="40px"
                    />
                </div>
                <IoMdArrowDropdown size={20} />
            </div>

            {open && (
                <div className="absolute top-10 flex flex-col bg-colorLightBlack overflow-hidden rounded-md border-[0.1px]">
                    <Link
                        to={"/dashboard/my-profile"}
                        onClick={() => setOpen(false)}
                    >
                        <div className=" flex items-center w-full gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-colorBlackBackground">
                            <VscDashboard className="text-lg" /> Dashboard
                        </div>
                    </Link>

                    <button
                        className="z-50 border-t flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 cursor-pointer hover:bg-colorBlackBackground"
                        onClick={() => {
                            dispatch(logout());
                            navigate("/");
                            handleLinkVisible();
                        }}
                    >
                        <VscSignOut className="text-lg" />
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}

export default ProfileDropDown;

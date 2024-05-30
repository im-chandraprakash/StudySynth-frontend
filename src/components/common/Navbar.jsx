import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileDropDown from "../core/Auth/ProfileDropDown";

const tabs = [
    {
        id: 0,
        name: "Home",
        to: "/",
    },
    {
        id: 1,
        name: "About",
        to: "/about",
    },
    {
        id: 2,
        name: "Contact Us",
        to: "contact-us",
    },
    {
        id: 3,
        name: "Quiz",
        to: "quiz",
    },
];
function Navbar() {
    const { token } = useSelector((state) => state.auth);
    return (
        <div className="fixed w-full z-50 h-[50px] flex px-20 justify-between items-center text-colorGhostWhite bg-gradient-to-r from-colorRoyalBlue to-colorDarkPurple ">
            <div>
                <Link to="/" className="text-2xl font-bold tracking-wider">
                    STUDYSYNTH
                </Link>
            </div>
            <div className=" flex gap-x-20">
                <div className="flex gap-x-20 text-1xl items-center">
                    {tabs.map((link) => (
                        <Link to={link.to} key={link.id}>
                            <p className="font-semibold hover:text-[#0a132b] hover:font-bold ">
                                {link.name}
                            </p>
                        </Link>
                    ))}
                </div>
                <div className=" flex gap-5">
                    {token == null && (
                        <Link to="/login">
                            <button className="center w-[80px] border-[1px] border-colorLightPurple rounded-[5px] p-2 px-4 bg-colorOxfordBlue">
                                Login
                            </button>
                        </Link>
                    )}

                    {token == null && (
                        <Link to="/signup">
                            <button className="center w-[80px] border-[1px] border-colorLightPurple rounded-[5px] p-2 px-4 bg-colorOxfordBlue">
                                Signup
                            </button>
                        </Link>
                    )}
                </div>

                <div>{token != null && <ProfileDropDown setToken={token} />}</div>
            </div>
        </div>
    );
}

export default Navbar;

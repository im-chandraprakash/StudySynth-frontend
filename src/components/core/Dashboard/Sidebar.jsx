import React, { useEffect } from "react";
import { RiAdminFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const data = [
    {
        id: 1,
        name: "My Profile",
        link: "/dashboard/my-profile",
        route: "my-profile",
        panel: "dashboard",
    },
    {
        id: 2,
        name: "Settings",
        link: "/dashboard/settings",
        panel: "dashboard",
    },
    {
        id: 3,
        name: "Articles",
        link: "/dashboard/articles",
        panel: "dashboard",
    },
    {
        id: 4,
        name: "Add Content",
        link: "/dashboard/add-content",
        panel: "dashboard",
    },
    {
        id: 5,
        name: "Add Content",
        link: "/admin/add-content",
        panel: "admin",
    },
    {
        id: 6,
        name: "Add Subjects",
        link: "/admin/add-subjects",
        panel: "admin",
    },
    {
        id: 7,
        name: "Add Branch",
        link: "/admin/add-branch",
        panel: "admin",
    },
    {
        id: 8,
        name: "Add Syllabus",
        link: "/admin/add-syllabus",
        panel: "admin",
    },
    {
        id: 9,
        name: "Quiz",
        link: "/admin/quiz",
        panel: "admin",
    },
    {
        id: 10,
        name: "Articles",
        link: "/admin/articles",
        panel: "admin",
    },
];
function Sidebar() {
    const location = useLocation();

    const routeSection = location?.pathname?.split("/")[1];

    useEffect(() => {
        console.log(location.pathname);
    }, [location.pathname]);

    return (
        <div className=" w-[250px] bg-[#162739] pt-20">
            <div className="center mb-5 -mt-5">
                <Link to={"/"} className="text-2xl font-bold tracking-wider">
                    STUDYSYNTH
                </Link>
            </div>
            {routeSection == "admin" ? (
                <div className="flex justify-center gap-3  items-center text-3xl">
                    <RiAdminFill />
                    <h1 className=" font-semibold">Admin Panel</h1>
                </div>
            ) : (
                ""
            )}
            <div className="flex flex-col ">
                {data.map((item, id) => (
                    <Link
                        key={id}
                        to={item.link}
                        className={`text-center px-5 py-3  ${
                            location.pathname == item.link
                                ? "bg-gray-600 border-l-[10px] border-colorWhite font-semibold text-colorWhite"
                                : ""
                        }`}
                    >
                        {routeSection == item.panel ? item.name : ""}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;

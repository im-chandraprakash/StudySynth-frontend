import React from "react";
import Sidebar from "../components/core/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
    return (
        <div className="relative flex min-h-[calc(100vh)]">
            <Sidebar />
            <div className="flex-1 h-[calc(100vh)] overflow-auto">
                <div className="mx-auto w-11/12 max-w-[1000px] py-5">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

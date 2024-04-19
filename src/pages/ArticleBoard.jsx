import React from "react";
import HeadingSidebar from "../components/core/Article/HeadingSidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";

function ArticleBoard() {
    return (
        <div className=" w-screen h-screen overflow-auto">
            <div>
                <Navbar />
            </div>
            <div className=" w-full h-full relative flex min-h-[calc(100vh)] oveflow-hidden">
                <HeadingSidebar />
                <div className="flex-1 h-[calc(100vh)]  overflow-auto ">
                    <div className="mx-auto w-11/12 max-w-[1000px] py-5 mt-10">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleBoard;

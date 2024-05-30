import React, { useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/core/Home/Hero";
import Footer from "../components/common/Footer";
import HomeCarousals from "../components/core/Home/HomeCarousals";
import RecenteArticles from "../components/core/Home/RecenteArticles";

import SubjectSlider from "../components/core/Home/SubjectSlider";

function Home() {
    
    return (
        <div>
            <div className="w-full h-[calc(100vh)] bg-colorDarkBlack relative">
                <Navbar />
                <div className="skewed_curve h-full bg-gradient-to-r from-colorRoyalBlue to-colorDarkPurple">
                    <div className="w-full h-full max-w-maxContent mx-auto ">
                        <Hero />
                    </div>
                </div>
                <HomeCarousals />
                <SubjectSlider />
                {/* <RecenteArticles /> */}
                <Footer />
            </div>
        </div>
    );
}

export default Home;

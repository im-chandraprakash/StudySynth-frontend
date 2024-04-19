import React from "react";
import image from "../../../assets/hero-image.png";
function Hero() {
    return (
        <div className="h-[100vh] w-full  text-colorGhostWhite flex gap-5 overflow-hidden">
            <div className="flex-[1] flex flex-col justify-center h-full  gap-y-10">
                <h1 className="text-[42px] font-semibold leading-[1.2]">
                    Welcome to new era of online Study with Us Achieve your
                    goals.
                </h1>
                <h3 className="text-[18px]">
                    100% course content in one place to get start preparation
                    before one-night examination.
                </h3>

                <button className="w-fit bg-white text-colorOxfordBlue  p-3 px-5 rounded-lg font-bold">
                    Start Now
                </button>
            </div>

            <div className="flex-[0.8] relative mt-28">
                <div className="absolute w-full h-full">
                    <div className="w-[550px] h-[550px]  bg-[#0a132b] rounded-full  p-8">
                        <img
                            src={image}
                            alt="Home page image"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

import React from "react";

function Footer() {
    return (
        <div className="  w-full bg-colorBlackBackground text-white my-24 py-14 text-[17px] overflow-hidden">
            <div className="max-w-maxContent mx-auto flex flex-row w-full overflow-hidden">
                <div className="flex ">
                    <div className="flex-1 gap-y-4">
                        <h2 className="text-[28px] font-semibold my-5">
                            About StudySynth
                        </h2>
                        <p>
                            StudySynth is an innovative platform designed to
                            revolutionize the way students access and interact
                            with educational content. Our mission is to empower
                            learners by providing them with personalized,
                            branch-wise educational resources and insights.
                        </p>
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-center gap-y-4">
                        <h2 className="font-semibold text-lg">Quick Links</h2>
                        <ul className="flex gap-2 flex-col">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Branches</a>
                            </li>
                            <li>
                                <a href="#">Subjects</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className="font-semibold text-lg">Contact Us</h2>
                    <div className="my-5">
                        <p>
                            <i className="fas fa-envelope"></i> Email:
                            info@studysynth.com
                        </p>
                        <p>
                            <i className="fas fa-phone"></i> Phone: +1 123 456
                            7890
                        </p>
                        <p>
                            <i className="fas fa-map-marker-alt"></i> Address:
                            123 Main Street, City, Country
                        </p>
                    </div>
                </div>
            </div>
            <div className="center mt-10 font-semibold">
                <p>&copy; 2024 StudySynth. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;

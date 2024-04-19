import React from "react";
import Image from "../../../assets/User.png";
import EditButton from "../../common/EditButton";
function MyProfile() {
    return (
        <div>
            <div className="w-full max-w-maxContent mx-auto flex gap-6 flex-col mt-5">
                <h1 className="text-3xl font-semibold">My Profile</h1>
                <div className="rounded-md border-[1px] border-colorWhiteBorder flex justify-between p-8 bg-colorLightBlack">
                    <div className="">
                        <div>
                            <img
                                src={Image}
                                alt="user profile image"
                                width={100}
                                height={100}
                                style={{ borderRadius: "50%" }}
                            />
                        </div>
                        <div className="my-4">
                            <h2>Chandraprakash sahu</h2>
                            <p>sahuprakash.er@gmail.com</p>
                        </div>
                    </div>
                    <EditButton />
                </div>

                <div className="rounded-md border-colorWhiteBorder border-[1px] flex justify-between p-8 bg-colorLightBlack">
                    <div>
                        <h2 className="font-semibold text-2xl mb-7">About</h2>
                        <p>Hey there</p>
                    </div>

                    <EditButton />
                </div>

                <div className="rounded-md border-colorWhiteBorder border-[1px] flex flex-col justify-between p-8 bg-colorLightBlack">
                    <div className="flex justify-between">
                        <h2 className="font-semibold text-2xl mb-7">
                            Personal Details
                        </h2>
                        <EditButton />
                    </div>
                    <div className=" flex flex-col gap-8">
                        <div className="flex justify-between w-[55%]">
                            <div>
                                <p className="mb-1">FirstName</p>
                                <h3 className="font-semibold">
                                    Chandraprakash SAhu
                                </h3>
                            </div>
                            <div>
                                <p className="mb-1">Last Name</p>
                                <h3 className="font-semibold">Sahu</h3>
                            </div>
                        </div>
                        <div className="flex justify-between w-[55%]">
                            <div>
                                <p className="mb-1">FirstName</p>
                                <h3 className="font-semibold">
                                    Chandraprakash SAhu
                                </h3>
                            </div>
                            <div>
                                <p className="mb-1">Last Name</p>
                                <h3 className="font-semibold">Sahu</h3>
                            </div>
                        </div>
                        <div className="flex justify-between w-[55%]">
                            <div>
                                <p className="mb-1">FirstName</p>
                                <h3 className="font-semibold">
                                    Chandraprakash SAhu
                                </h3>
                            </div>
                            <div>
                                <p className="mb-1">Last Name</p>
                                <h3 className="font-semibold">Sahu</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;

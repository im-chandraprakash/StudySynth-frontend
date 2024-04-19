import React from "react";
import Image from "../../../assets/User.png";
import { LiaUploadSolid } from "react-icons/lia";
import { useForm } from "react-hook-form";
import { RiDeleteBin6Line } from "react-icons/ri";
function Settings() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div>
            <div className="w-full max-w-maxContent mx-auto mt-5 flex flex-col gap-8">
                <h1 className="text-3xl font-semibold"> Edit Profile </h1>

                <div className="flex gap-6 bg-[#162739] p-10 rounded-md border-[0.1px] border-colorWhiteBorder ">
                    <div>
                        <img
                            src={Image}
                            alt="user profile image"
                            width={"100px"}
                            height={"100px"}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-semibold text-xl">
                            Change Profile Picture
                        </h2>
                        <div className="flex gap-10">
                            <button className="button">Select</button>
                            <button className="button bg-blue-700">
                                <div className="center gap gap-4">
                                    Upload <LiaUploadSolid />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 bg-[#162739] p-10 rounded-md border-[0.1px] border-colorWhiteBorder">
                    <h1 className="text-2xl font-semibold">
                        Personal Information
                    </h1>

                    <form
                        onSubmit={handleSubmit(() =>
                            console.log("going to submit")
                        )}
                        className="flex flex-col gap-5 px-10 w-full"
                    >
                        <div className="flex justify-between w-full gap-20">
                            <div className="w-full">
                                <label htmlFor="firstName">
                                    <p>First Name</p>
                                </label>
                                <input
                                    id="firstName"
                                    type="text"
                                    name="firstName"
                                    placeholder="Enter Your FirstName"
                                    {...register("firstName")}
                                    className="input-box w-[100%]"
                                />
                            </div>

                            <div className="w-full">
                                <label htmlFor="lastName">
                                    <p>Last Name</p>
                                </label>
                                <input
                                    id="lastName"
                                    type="text"
                                    name="lastName"
                                    placeholder="Enter Your LastName"
                                    className="input-box w-[100%]"
                                    {...register("lastName")}
                                />
                            </div>
                        </div>

                        <div className="flex justify-between w-full gap-20">
                            <div className="w-full">
                                <label htmlFor="dateOfBirth">
                                    <p>Contact Number</p>
                                </label>
                                <input
                                    name="dob"
                                    id="dateOfBirth"
                                    type="date"
                                    className="input-box w-[100%]"
                                    {...register("dateOfBirth")}
                                />
                            </div>

                            <div className="w-full">
                                <label htmlFor="gender">
                                    <p>Gender</p>
                                </label>
                                <select
                                    name="gender"
                                    className="input-box w-[100%]"
                                >
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Non-Binary</option>
                                    <option>Prefer Not to say</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-between w-full gap-20">
                            <div className="w-full">
                                <label htmlFor="contact-number">
                                    <p>Contact Number</p>
                                </label>
                                <input
                                    type="number"
                                    id="contact-number"
                                    name="contactNumber"
                                    placeholder="Please Enter Your Contact Number"
                                    className="input-box w-[100%]"
                                    {...register("contactNumber")}
                                />
                            </div>

                            <div className="w-full">
                                <label htmlFor="about">
                                    <p>About</p>
                                </label>
                                <input
                                    id="about"
                                    name="about"
                                    type="text"
                                    placeholder="Enter About Yourself"
                                    className="input-box w-[100%]"
                                    {...register("about")}
                                />
                            </div>
                        </div>
                    </form>
                </div>

                <div className="flex flex-col gap-6 bg-[#162739] p-10 rounded-md border-[0.1px] border-colorWhiteBorder w-full">
                    <h1 className="text-2xl font-semibold">Password</h1>
                    <form className="flex flex-col w-full">
                        <div className="flex justify-between w-full gap-20">
                            <div className="w-full">
                                <label htmlFor="password">
                                    <p>Password</p>
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    className="input-box w-[100%]"
                                    placeholder="Enter your current password"
                                    {...register("password", {
                                        required: true,
                                    })}
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="confirmPassword">
                                    <p>Confirm Password</p>
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    className="input-box w-[100%]"
                                    placeholder="Enter new Password"
                                    {...register("confirmPassword", {
                                        required: true,
                                    })}
                                />
                            </div>
                        </div>
                    </form>
                </div>

                <div className="bg-[#340019] flex gap-6  p-10 rounded-md border-[#a02828]">
                    <div className="bg-[#691432] rounded-full w-[80px] h-[80px] center ">
                        <RiDeleteBin6Line className="text-[#EF476F] text-3xl" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl font-semibold">
                            Delete Account
                        </h1>
                        <div>
                            <p>Would you like to delete account?</p>
                            <p>
                                This account may contain Paid Courses. Deleting
                                your account is permanent and will remove all
                                the contain associated with it.
                            </p>

                            <button className="text-[#D43D63]">
                                I want to delete my Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;

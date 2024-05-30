import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { sendotp } from "../services/operations/authAPI";
import { useDispatch } from "react-redux";
import { setSignupData } from "../reducers/slices/authSlice";
import signUpImage from "../assets/signup finaljpg.jpg";

function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const { firstName, lastName, email, password, confirmPassword } = formData;

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    async function onSubmit(e) {

        e.preventDefault();
        dispatch(setSignupData(formData));
        const data = await sendotp(formData, dispatch, navigate);
        console.log("data is : ", formData);
    }

    return (
        <div className="bg-colorBlackBackground text-colorGhostWhite h-screen">
            <div className="w-full h-full max-w-maxContent mx-auto flex gap-x-16 justify-center items-center">
                <div className="bg-colorLightBlack p-7 rounded-md text-xl flex-[1.3]">
                    <h1 className="text-center text-3xl font-medium">
                        Signup Form
                    </h1>
                    <form
                        onSubmit={onSubmit}
                        className=" w-full flex flex-col space-y-3 space-x-1 mt-10"
                    >
                        <div className="flex space-x-5 w-full">
                            <label htmlFor="firstName" className="label w-full">
                                <p>firstName</p>
                                <input
                                    type="text"
                                    id="firstName"
                                    placeholder="Enter firstname"
                                    name="firstName"
                                    onChange={handleOnChange}
                                    style={{}}
                                    className="input-box w-full"
                                />
                            </label>

                            <label htmlFor="lastName" className="label w-full">
                                <p>lastName</p>
                                <input
                                    type="text"
                                    id="lastName"
                                    placeholder="Enter lastName"
                                    name="lastName"
                                    onChange={handleOnChange}
                                    className="input-box w-full"
                                />
                            </label>
                        </div>
                        <div className="w-full">
                            <label htmlFor="email" className="label">
                                <p>Email Address</p>
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter email"
                                name="email"
                                onChange={handleOnChange}
                                className="input-box"
                            />
                        </div>

                        <div className="flex space-x-5 w-full ">
                            <div className="w-full">
                                <label htmlFor="password" className="label">
                                    <p>Password</p>
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter Password"
                                    name="password"
                                    className="input-box"
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="confirmPassword"
                                    className="label"
                                >
                                    <p>Confirm Password</p>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        placeholder="Enter confirm password"
                                        name="confirmPassword"
                                        onChange={handleOnChange}
                                        className="input-box"
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <input type="submit" className="button mt-4" />
                        </div>
                        <div className="flex gap-2">
                            <p>Alread have a account ?</p>
                            <Link to="/login" className="text-[17px] font-semibold text-colorDarkPurple">Go to Login</Link>
                        </div>
                    </form>
                </div>

                <div className="flex-[0.8]">
                    <div>
                        <img src={signUpImage} alt="Sign up Image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;

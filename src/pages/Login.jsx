import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../services/operations/authAPI";
import loginImage from "../assets/loginjpg.jpg";
import { useDispatch } from "react-redux";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    const handleOnChange = (e) => {
        // console.log("e", e);
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("Hello i'm here ", formData);
        const result = await loginAPI(formData, dispatch, navigate);
        console.log("result is : ", result);
    }
    return (
        <div className="bg-colorBlackBackground text-colorGhostWhite h-screen w-full">
            <div className="w-full max-w-maxContent mx-auto h-full flex justify-center items-center gap-x-20">
                <div className="bg-colorLightBlack p-10 rounded-md text-xl flex-[1.2]">
                    <h1 className="text-center text-3xl font-medium">Login</h1>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col space-y-5 space-x-1 mt-10"
                    >
                        <div className="flex flex-col space-y-5">
                            <label htmlFor="email" className="label">
                                <p>Email Address</p>
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="Enter your Email"
                                    name="email"
                                    onChange={handleOnChange}
                                    className="input-box"
                                />
                            </label>

                            <label htmlFor="password" className="label">
                                <p>Enter Password</p>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    name="password"
                                    onChange={handleOnChange}
                                    className="input-box"
                                />
                            </label>
                        </div>

                        <div className="flex justify-center">
                            <input type="submit" className="button" />
                        </div>

                        <div className="flex items-center gap-2 text-[17px]">
                            <p>Don't have account ?</p>
                            <Link to={"/signup"}  className=" font-semibold text-colorDarkPurple">Go to Signup</Link>
                        </div>
                    </form>
                </div>

                <div className="flex-[0.7]">
                    <div>
                        <img src={loginImage} alt="Login Image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

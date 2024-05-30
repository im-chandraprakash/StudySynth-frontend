import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { FaUserLock } from "react-icons/fa";

function AdminLogin() {
    const navigate = useNavigate();

    const admin = localStorage.getItem("admin");
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function handleSubmit(e) {
        e.preventDefault();

        if (email == "sahuji@gmail.com" && password == "1234") {
            localStorage.setItem("admin", "this is admin");
            navigate("/admin/add-content");
        }
    }

    if (admin == null) {
        return (
            <div className="w-screen h-screen text-white  ">
                <div className="w-full h-full flex flex-col gap-y-10 justify-center items-center ">
                    <div className="w-[30%] border border-1 border-white p-10  rounded-md bg-colorLightBlack">
                        <div className="flex justify-center items-center  gap-2 text-3xl">
                            <FaUserLock />
                            <h1 className="text-2xl font-semibold text-center">
                                Admin Login{" "}
                            </h1>
                        </div>
                        <form className="w-full" onSubmit={handleSubmit}>
                            <div className="w-full my-5 mt-8">
                                <label htmlFor="email" className="label">
                                    <p>Enter Your Email :</p>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter You Email"
                                    id="email"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="input-box"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="label">
                                    <p>Enter Your Password : </p>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder="Enter Your Password"
                                    className="input-box"
                                />
                            </div>

                            <div className="center mt-5">
                                <input
                                    type="submit"
                                    className="button text-center"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    } else {
        return <Outlet />;
    }
}

export default AdminLogin;

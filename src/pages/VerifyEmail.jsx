import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { sendotp, signupAPI } from "../services/operations/authAPI";
import { Link, useNavigate } from "react-router-dom";
import { RxCountdownTimer } from "react-icons/rx";

function VerifyEmail() {
    const signupData = useSelector((state) => state.auth.signupData);
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOtpSubmit = async () => {
        try {
            const newSignupData = { ...signupData, otp: otp };
            const data = await signupAPI(newSignupData , navigate);
        } catch (error) {
            console.log("otp-varificatior error", error);
        }
    };

    const resendOtp = async () => {
        const data = await sendotp(signupData, dispatch, navigate);
    };
    return (
        <div className="w-full h-[100vh] ">
            <div className="w-full max-w-maxContent mx-auto flex justify-center items-center h-full">
                <div className=" w-[40%] text-[27px] flex justify-center items-center flex-col p-10 rounded-md border border-solid-white">
                    <h1 className="text-[30px] text-white font-semibold">
                        Verify Email
                    </h1>
                    <p className="text-[19px] text-richblack-300 leading-6">
                        A verification code has been sent to you. Enter the code
                        below
                    </p>

                    <div className="my-10 text-[34px] ">
                        {/* <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            renderSeparator={<span>-</span>}
                            renderInput={(props) => <input {...props} />}
                        ></OtpInput> */}
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            renderInput={(props) => (
                                <input
                                    {...props}
                                    placeholder="-"
                                    style={{
                                        boxShadow:
                                            "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                    }}
                                    className="w-[48px] lg:w-[60px] border-0 bg-colorLightBlack rounded-[0.5rem] text-white aspect-square text-center focus:border-0 focus:outline-2 focus:bg-colorBlackBackground"
                                />
                            )}
                            containerStyle={{
                                justifyContent: "space-between",
                                gap: "0 6px",
                            }}
                        />
                    </div>
                    <button className="button" onClick={handleOtpSubmit}>
                        Click me
                    </button>

                    <div className=" w-full self-start flex items-center justify-between t-4 mt-4">
                        <div className="flex  gap-2 text-[17px]">
                            <p> go back to - </p>
                            <Link
                                to={"/signup"}
                                className=" font-semibold text-colorDarkPurple"
                            >
                                Signup
                            </Link>
                        </div>

                        <div className=" flex items-center text-[18px] gap-1 ">
                            <RxCountdownTimer/>
                            <button
                                className=" font-semibold border-none text-colorDarkPurple"
                                onClick={resendOtp}
                            >
                                resend otp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="text-white flex justify-center items-center h-[90vh]">
            <div className="">
                {loading ? (
                    <div>Loading ...</div>
                ) : (
                    <div className="flex flex-col gap-2 max-w-[450px]">
                        <form onSubmit={handleOtpSubmit}>
                            <button
                                type="submit"
                                className="w-full text-center p-3 bg-yellow-100 mt-5 text-black font-bold rounded-lg"
                            >
                                Verify Email
                            </button>
                        </form>

                        <div className="flex justify-between text-[17px] mt-4">
                            <div>
                                <Link to={"/signup"}>
                                    <div className="flex gap-2 items-center">
                                        {/* <HiArrowNarrowLeft /> */}
                                        <p>Back to Signup</p>
                                    </div>
                                </Link>
                            </div>

                            <div
                                // onClick={() =>
                                //     dispatch(
                                //         sendOtp(signupData.email, navigate)
                                //     )
                                // }
                                className={"cursor-pointer"}
                            >
                                <div className="flex gap-2 items-center text-blue-200">
                                    {/* <RxCountdownTimer /> */}
                                    <p>Resent it</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default VerifyEmail;

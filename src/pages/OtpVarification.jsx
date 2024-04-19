import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useSelector } from "react-redux";
import { signupAPI } from "../services/operations/authAPI";

function OtpVarification() {
    const signupData = useSelector((state) => state.auth.signupData);
    const [otp, setOtp] = useState("");

    const handleOtpSubmit = async () => {
        try {
            const newSignupData = { ...signupData, otp: otp };
            const data = await signupAPI(newSignupData);
        } catch (error) {
            console.log("otp-varificatior error", error);
        }
    };
    return (
        <div className="bg-colorDarkBlack w-full h-[100vh] ">
            <div className="w-full max-w-maxContent mx-auto flex justify-center items-center h-full">
                <div className="bg-colorLightPurple w-[40%] text-3xl flex justify-center items-center flex-col p-10 rounded-md">
                    <h1>Enter Your Inputs : </h1>
                    <div className="my-10">
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            renderSeparator={<span>-</span>}
                            renderInput={(props) => <input {...props} />}
                        ></OtpInput>
                    </div>
                    <button
                        className="bg-colorOxfordBlue text-xl p-3 rounded-lg"
                        onClick={handleOtpSubmit}
                    >
                        Click me
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OtpVarification;

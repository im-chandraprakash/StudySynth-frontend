import { endpoints } from "../apis.js";
import { apiConnector } from "../axiosClient.js";

import { setToken } from "../../reducers/slices/authSlice.js";
const { SIGNUP_API, SENDOTP_API, LOGIN_API } = endpoints;

export async function sendotp(data, dispatch, navigate) {
    try {
        const response = await apiConnector("POST", SENDOTP_API, data);

        if (!response.data.success) {
            throw new Error(response.data.message);
        }

        navigate("/otp-varification");

        console.log("response is ", response);
    } catch (error) {
        console.log("send otp error", error);
    }
}

export async function signupAPI(signupData, navigate) {
    try {
        console.log("sign up data : ", signupData);
        const response = await apiConnector("POST", SIGNUP_API, signupData);
        console.log("sign up response", response);

        if (!response.data.success) {
            throw new Error(response.data.message);
        }

        navigate("/login");
    } catch (error) {
        console.log("sign up Error", error);
    }
}

export async function loginAPI(data, dispatch, navigate) {
    try {
        console.log("login api is : ", LOGIN_API);
        const response = await apiConnector("POST", LOGIN_API, data);

        if (!response.data.success) {
            throw new Error(response.data.message);
        }

        console.log(response.data.data);
        dispatch(setToken(response.data.data));
        navigate("/");

        return response.data;

        console.log("login response", response.data);
    } catch (error) {
        console.log("login error ", error);
    }
}

import { endpoints } from "../apis.js";
import { apiConnector } from "../axiosClient.js";

import { setToken } from "../../reducers/slices/authSlice.js";
import toast from "react-hot-toast";
const { SIGNUP_API, SENDOTP_API, LOGIN_API } = endpoints;

export async function sendotp(data, dispatch, navigate) {
    const toastId = toast.loading("Loading.....");
    try {
        const response = await apiConnector("POST", SENDOTP_API, data);

        if (!response.data.success) {
            throw new Error(response.data.message);
        }

        toast.success("otp sent successfully");
        navigate("/verify-email");
        console.log("response is ", response);
    } catch (error) {
        console.log("send otp error", error);
    }
    toast.dismiss(toastId);
}

export async function signupAPI(signupData, navigate) {
    try {
        console.log("sign up data : ", signupData);
        const response = await apiConnector("POST", SIGNUP_API, signupData);
        console.log("sign up response", response);

        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Account created Successfully");
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

        toast.success("Logged in Successfully");
        navigate("/");

        return response.data;

        console.log("login response", response.data);
    } catch (error) {
        console.log("login error ", error);
    }
}

// export async function adminLogin() {
//     try {

//         const response = apiConnector();

//         const resData = response?.data;

//         if(!resData.success){
//             throw new Error(resData.message);
//         }


//     } catch (error) {
//         console.log("login error", error);
//     }
// }

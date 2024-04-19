import { contentEndpoints } from "../apis";
const {
    CREATE_BRANCH_API,
    CREATE_SUBJECT_API,
    CREATE_CONTENT_API,
    GET_ALLBRANCH_API,
    GET_FILTERED_SUBJECT,
    ADD_SYLLABUS_API,
} = contentEndpoints;
import { apiConnector } from "../axiosClient";
import { toast } from "react-hot-toast";

export async function createBranchAPI(data) {
    const toastId = toast.loading("Loading...");
    try {
        const response = await apiConnector("POST", CREATE_BRANCH_API, data);

        let resData = response.data;

        console.log("response data ", resData);

        if (!resData?.success) {
            toast.error(resData?.message);
            throw new Error(resData?.message);
        }

        toast.success(resData?.message);
    } catch (error) {
        console.log("branch error - ", error.message);
    }
    toast.dismiss(toastId);
}

export async function getAllBranchAPI() {
    const toastId = toast.loading("Loading...");
    let result = "";
    try {
        const response = await apiConnector("GET", GET_ALLBRANCH_API);
        const resData = response?.data;

        if (!resData.success) {
            throw new Error(resData.message);
        }

        result = resData.data;
    } catch (e) {
        console.log("get All Branch Error :", e.message);
    }
    toast.dismiss(toastId);
    return result;
}

export async function getFilteredSubject(data) {
    let result = "";
    try {
        const response = await apiConnector("POST", GET_FILTERED_SUBJECT, data);
        const resData = response.data;
        console.log("api data : ", resData);
        if (!resData.success) {
            throw new Error(resData.message);
        }
        result = resData?.data;
    } catch (e) {
        console.log("filter subject error ", e.message);
    }
    return result;
}

export async function createSubject(data) {
    const toastId = toast.loading("Loading...");

    try {
        const response = await apiConnector("POST", CREATE_SUBJECT_API, data);

        const resData = response?.data;

        if (!resData.success) {
            toast.error(resData.message);
            throw new error(resData.message);
        }

        toast.success(resData.message);
        console.log("response data : ", response.data);
    } catch (e) {
        console.log("create subject error : ", e.message);
    }
    toast.dismiss(toastId);
}

export async function createContentAPI(data) {
    const toastId = toast.loading("Loading...");
    let status = false;
    try {
        const response = await apiConnector("POST", CREATE_CONTENT_API, data);
        const resData = response.data;

        if (!resData.success) {
            toast.error(resData.message);
            throw new Error(resData.message);
        }

        toast.success(resData.message);
        status = true;
    } catch (e) {
        console.log("create Content Error ", e);
    }
    toast.dismiss(toastId);
    return status;
}

export async function uploadSyllabus(data) {
    const toastId = toast.loading("Loading ...");

    try {
        const response = await apiConnector("POST", ADD_SYLLABUS_API, data);
        const resData = response.data;

        if (!resData.success) {
            throw new Error(resData.message);
        }
    } catch (error) {
        console.log("upload syllabus error", error);
    }

    toast.dismiss(toastId);
}

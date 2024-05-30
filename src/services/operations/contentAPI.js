import toast from "react-hot-toast";
import {  adminEndpoints ,  contentEndpoints } from "../apis";

const {
    GET_ALLBRANCH_API,
    SHOW_CONTENTS_API,
   
} = adminEndpoints;

const {
    GET_SINGLE_ARTICLE,
    GET_RECENT_ARTICLES,
} = contentEndpoints;
import { apiConnector } from "../axiosClient";

export async function fetchAllBranchAPI() {
    try {
        const response = await apiConnector("GET", GET_ALLBRANCH_API);
        const resData = response.data;
        const result = resData.data;
        // console.log(resData);

        if (!resData?.success) {
            throw new Error(resData.message);
        }
        return result;
    } catch (e) {
        console.log("fetch all branch error : ", e);
    }
}

export async function fetchRecentArticles() {
    try {
        const response = await apiConnector("GET", GET_RECENT_ARTICLES);
        const resData = response?.data;

        if (!resData.success) {
            throw new Error(resData.message);
        }

        console.log("Recent articles : ", resData);
    } catch (error) {
        console.log("fetch RecentArticles error", error);
    }
}

export async function fetchShowContents() {
    const toastId = toast.loading("Loading");
    let result = null;
    try {
        const resData = await apiConnector("GET", SHOW_CONTENTS_API);
        const data = resData?.data;

        if (!data.success) {
            throw new Error(data.message);
        }

        result = data;
    } catch (error) {
        console.log("show allContents error", error);
    }
    toast.dismiss(toastId);
    return result;
}

export async function fetchSingleArticle(data) {
    try {
        const response = await apiConnector("POST", GET_SINGLE_ARTICLE, data);
        const resData = response?.data;

        if (!resData.success) {
            throw new Error(resData.message);
        }

        return resData?.data;
    } catch (error) {
        console.log("fetch single article error", error);
    }
}

import { apiConnector } from "../axiosClient";
import { contentEndpoints } from "../apis";

const { GET_ALLSUBJECT_API, GET_INFO_ABOUT_SUBJECT, FETCH_ALL_ABOUT_BRANCH } =
    contentEndpoints;
export async function fetchAllSubjectsAPI() {
    try {
        const response = await apiConnector("GET", GET_ALLSUBJECT_API);
        const resData = response.data;

        if (!resData.success) {
            throw new Error(resData.message);
        }

        return resData?.data;
    } catch (error) {
        console.log("Fetch Subjects API", error);
    }
}

export async function fetchCompleteInfoOfSubject(data) {
    try {
        const response = await apiConnector(
            "POST",
            GET_INFO_ABOUT_SUBJECT,
            data
        );
        const resData = await response?.data;

        if (!resData?.success) {
            throw new Error(resData.message);
        }

        return resData?.data;
    } catch (error) {
        console.log("fetch Complete Info of Subject ", error);
    }
}

export async function fetchAllAboutBranch(data) {
    try {
        const response = await apiConnector(
            "POST",
            FETCH_ALL_ABOUT_BRANCH,
            data
        );
        const resData = response?.data;

        if (!resData.success) {
            throw new Error(resData.message);
        }

        return resData?.data;
    } catch (error) {
        console.log("fetchAll about branch error : ", error);
    }
}

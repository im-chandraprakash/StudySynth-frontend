const baseURL = import.meta.env.VITE_APP_BASE_URL;

console.log("base url is : ", baseURL);

export const endpoints = {
    SENDOTP_API: baseURL + "/auth/sendotp",
    SIGNUP_API: baseURL + "/auth/signup",
    LOGIN_API: baseURL + "/auth/login",
};

export const contentEndpoints = {
    CREATE_BRANCH_API: baseURL + "/admin/createBranch",
    GET_ALLBRANCH_API: baseURL + "/admin/getAllBranchs",
    CREATE_SUBJECT_API: baseURL + "/admin/createSubject",
    GET_FILTERED_SUBJECT: baseURL + "/admin/getfilteredSubjects",
    GET_ALLSUBJECT_API: baseURL + "/admin/getAllSubjects",
    CREATE_CONTENT_API: baseURL + "/admin/createContent",
    ADD_SYLLABUS_API: baseURL + "/admin/addSyllabus",
    SHOW_CONTENTS_API: baseURL + "/admin/showContents",
    GET_INFO_ABOUT_SUBJECT: baseURL + "/subject/getInfoAboutSubject",
    GET_SINGLE_ARTICLE: baseURL + "/subject/getSingleArticle",
    FETCH_ALL_ABOUT_BRANCH: baseURL + "/subject/getAllAboutBranch",
};

import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import BranchInfo from "../components/core/ViewBranch/BranchInfo";
import SemesterItems from "../components/core/ViewBranch/SemesterItems";
import ViewSubjects from "../components/core/ViewBranch/ViewSubejcts";
import { useParams } from "react-router-dom";
import { fetchAllAboutBranch } from "../services/operations/SubjectAndBranch";

function ViewBranch() {
    const { branchKey, semesterId } = useParams();

    const [branchData, setBranchData] = useState();
    const [semesterData, setSemesterData] = useState(null);

    const [subjects, setSubjects] = useState();

    const fetchData = async () => {
        const data = await fetchAllAboutBranch({ branchKey: branchKey });

        if (data) {
            setBranchData(data);
            setSemesterData(data?.semesters);
        }
    };

    const matchSemester = () => {
        let ans = semesterData?.filter((item) => item._id === semesterId);

        console.log("here is error ", ans, semesterData);
        if (ans?.length > 0) {
            setSubjects(ans[0]?.subjects);
        }
    };

    useEffect(() => {
        fetchData();
        matchSemester();
    }, []);

    useEffect(() => {
        matchSemester();
    }, [semesterId, semesterData]);

    return (
        <div className="w-full h-full">
            <div>
                <Navbar />
            </div>
            <div className=" h-full w-full max-w-maxContent mx-auto ">
                <div>
                    <BranchInfo branchData={branchData} />
                </div>

                <div className=" w-full h-full flex mt-10">
                    <div className="w-[15%] h-[250px]  flex justify-center items-center flex-nowrap">
                        <SemesterItems
                            semesters={semesterData}
                            branchKey={branchKey}
                        />
                    </div>
                    <div className="">
                        <ViewSubjects subjects={subjects} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewBranch;

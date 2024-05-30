import React, { useEffect, useReducer, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
    setContentInfo,
    setStep,
} from "../../../../reducers/slices/contentSlice";
import {
    getAllBranchAPI,
    getFilteredSubject,
} from "../../../../services/operations/adminAPI";
import { RxCross2 } from "react-icons/rx";

function ContentInformation() {
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
    } = useForm();

    const { editCourse, contentInfo } = useSelector((state) => state.content);

    const dispatch = useDispatch();
    const [branchData, setBranchData] = useState(null);
    const [selectedBranch, setSelectedBranch] = useState(null);
    const [selectedSemester, setSelectedSemeter] = useState("first");
    const [subjects, setSubjects] = useState("");
    const [yearTags, setYearTags] = useState([]);
    const [inputYear, setInputYear] = useState("");
    const [subjectID, setSubjectID] = useState(null);

    const fetchData = async () => {
        const branchResult = await getAllBranchAPI();
        if (branchResult) {
            setSelectedBranch(branchResult[0].name);
            setBranchData(branchResult);
        }
    };

    const fetchSemesterData = async () => {
        console.log("semester selected", selectedSemester);
        if (branchData != null) {
            const data = {
                branchName: selectedBranch,
                semester: selectedSemester,
            };

            const result = await getFilteredSubject(data);

            console.log("subject data : ", subjects);
            if (result) {
                setSubjects(result);
                setSubjectID(result[0]?._id);
            }
        }
    };

    function handleKeyEnter(e) {
        if (e.key === "Enter" && inputYear.trim() != "") {
            setYearTags([...yearTags, inputYear.trim()]);
            setInputYear("");
        }
    }

    function handleRemoveYearTag(tag) {
        const tags = yearTags.filter((item) => tag !== item);
        setYearTags(tags);
    }

    useEffect(() => {
        fetchData();
        if (editCourse) {
            console.log("this is all info : ", contentInfo);
            if (contentInfo.title) {
                setValue("title", contentInfo.title);
            }
            setValue("branch", contentInfo.selectedBranch);
            setValue("semester", contentInfo.selectedSemester);
            setValue("subjectId", contentInfo.subjectID);
            setValue("yearOfAppearance", contentInfo.yearOfAppearance);
            setValue("isImp", contentInfo.isImp);
            setValue("unitName", contentInfo.unitName);
        }
    }, []);

    useEffect(() => {
        fetchSemesterData();
    }, [selectedSemester]);

    function handleFormSubmit() {
        const data = getValues();

        console.log("handling form submit ", data);
        console.log(" data is : ", data);

        const formData = new FormData();
        formData.append("branch", selectedBranch);
        formData.append("semseter", selectedSemester);
        formData.append("subjectId", subjectID);
        formData.append("title", data.title);
        formData.append("yearOfAppearance", yearTags);
        formData.append("isImp", data.isImp);
        formData.append("unitName", data.unitName);

        // const formDataObject = {
        //     branch: selectedBranch,
        //     semester: selectedSemester,
        //     subjectId: subjectID,
        //     title: data.title,
        //     yearOfAppearance: yearTags,
        //     isImp: data.isImp,
        //     unitName: data.unitName,
        // };

        dispatch(setContentInfo(formData));
        dispatch(setStep(2));
    }

    return (
        <div className="mx-auto max-w-maxContent w-full text-white mt-10">
            <div className="h-[70vh] flex justify-center items-center flex-col w-full">
                <div className="border rounded-md bg-colorLightBlack w-full h-full ">
                    <form
                        onSubmit={handleSubmit(handleFormSubmit)}
                        className="flex flex-col gap-4 p-10 justify-center h-full"
                    >
                        <div>
                            <label htmlFor="title" className="label">
                                <p>Enter Topic Name :</p>
                            </label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Enter topic Name"
                                id="title"
                                className="input-box"
                                {...register("title", {
                                    required: true,
                                })}
                            />
                            {errors.title && (
                                <p className="text-white text-sm">
                                    topicName is required to enter
                                </p>
                            )}
                        </div>

                        <div className="flex gap-5">
                            <div>
                                <label htmlFor="branch" className="label">
                                    Select Branch Name
                                </label>
                                <select
                                    name="none"
                                    id="branch"
                                    {...register("branch", {
                                        required: true,
                                    })}
                                    className="input-box"
                                    onChange={(e) => {
                                        setSelectedBranch(e.target.value);
                                    }}
                                >
                                    {branchData?.map((item) => (
                                        <option
                                            key={item._id}
                                            value={item.name}
                                        >
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.branch && (
                                    <p>branch is required to enter</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="semester" className="label">
                                    Select Semester
                                </label>
                                <select
                                    name="none"
                                    id="semester"
                                    className="input-box"
                                    {...register("semester", {
                                        required: true,
                                    })}
                                    onChange={(e) => {
                                        setSelectedSemeter(e.target.value);
                                    }}
                                >
                                    {branchData ? (
                                        <>
                                            <option value="first">first</option>
                                            <option value="second">
                                                second
                                            </option>
                                            <option value="third">third</option>
                                            <option value="fourth">
                                                fourth
                                            </option>
                                            <option value="fifth">fifth</option>
                                            <option value="sixth">sixth</option>
                                            <option value="seventh">
                                                seventh
                                            </option>
                                            <option value="eighth">
                                                eighth
                                            </option>
                                        </>
                                    ) : (
                                        <>
                                            <option value="none">none</option>
                                        </>
                                    )}

                                    {errors.semester && (
                                        <p>semester is required to enter</p>
                                    )}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="subject" className="label">
                                    Select Subject
                                </label>
                                <select
                                    name="none"
                                    id="subject"
                                    className="input-box"
                                    {...register("subject", {
                                        required: true,
                                    })}
                                    onChange={(e) =>
                                        setSubjectID(e.target.value)
                                    }
                                >
                                    {subjects ? (
                                        <>
                                            {subjects.map((item) => (
                                                <option
                                                    key={item._id}
                                                    value={item._id}
                                                >
                                                    {item.name}
                                                </option>
                                            ))}
                                        </>
                                    ) : (
                                        <>
                                            <option value="none">none</option>
                                        </>
                                    )}
                                </select>

                                {errors.subject && (
                                    <p>subject id is required to </p>
                                )}
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div>
                                <label
                                    htmlFor="yearOfAppearance"
                                    className="label"
                                >
                                    Year of Appearance
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Tags and press Enter"
                                    name="YearOfAppearence"
                                    value={inputYear}
                                    id="yearOfAppearance"
                                    className="input-box"
                                    {...register("yearOfAppearance", {
                                        required: true,
                                    })}
                                    onChange={(e) =>
                                        setInputYear(e.target.value)
                                    }
                                    onKeyDown={handleKeyEnter}
                                />

                                <div className="flex gap-2 mt-2">
                                    {yearTags &&
                                        yearTags.map((item, id) => (
                                            <div
                                                key={id}
                                                className="bg-colorBlackBackground p-2 py-1 rounded-md flex gap-1 justify-center items-center"
                                            >
                                                <p>{item}</p>
                                                <button>
                                                    <RxCross2
                                                        onClick={() =>
                                                            handleRemoveYearTag(
                                                                item
                                                            )
                                                        }
                                                    />
                                                </button>
                                            </div>
                                        ))}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="IsImp" className="label">
                                    <p>Is this Question Important :</p>
                                </label>
                                <select
                                    name="isImp"
                                    id="IsImp"
                                    className="input-box"
                                    {...register("isImp", {
                                        required: true,
                                    })}
                                >
                                    <option value="Important">Impotant</option>
                                    <option value="No">No</option>
                                    <option value="v-imp">
                                        Very Important
                                    </option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="unit" className="label">
                                    <p>Select Unit : </p>
                                </label>
                                <select
                                    name="unit"
                                    id="unit"
                                    className="input-box"
                                    {...register("unitName", {
                                        required: true,
                                    })}
                                >
                                    <option value="unit1">Unit-1</option>
                                    <option value="unit2">Unit-2</option>
                                    <option value="unit3">Unit-3</option>
                                    <option value="unit4">Unit-4</option>
                                    <option value="unit5">Unit-5</option>
                                </select>
                            </div>

                            <div>
                                <input
                                    type="submit"
                                    id="submit-form"
                                    className="hidden"
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <label htmlFor="submit-form" className="mt-5 flex justify-end">
                    <button
                        className="button justify-self-end"
                        onClick={handleFormSubmit}
                    >
                        Go to Next{" "}
                    </button>
                </label>
            </div>
        </div>
    );
}
export default ContentInformation;

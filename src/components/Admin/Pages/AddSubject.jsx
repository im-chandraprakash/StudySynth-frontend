import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
    createSubject,
    getAllBranchAPI,
} from "../../../services/operations/adminAPI";

function AddSubject() {
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
    } = useForm();

    const [previewImg, setPreviewImg] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const fileInputRef = useRef();

    const handleClick = (e) => {
        e.preventDefault();
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            previewFile(file);
        }
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewImg(reader.result);
        };
    };

    const handleCreateSubject = async () => {
        const data = getValues();
        data.image = imageFile;

        const formData = new FormData();

        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("image", imageFile);
        formData.append("semesterName", data.semesterName);
        formData.append("branchName", data.branchName);
        formData.append("key" , data.key);

        const result = await createSubject(formData);
    };

    const [branchData, setBranchData] = useState(null);

    const fetchData = async () => {
        const result = await getAllBranchAPI();
        setBranchData(result);
        console.log("branch Data", result);
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="w-full mx-auto max-w-maxContent flex flex-col justify-center items-center">
            <div className=" self-start ml-8 mt-1">
                <h1 className="font-semibold text-[25px]">Add Subject</h1>
            </div>
            <div className="bg-colorLightBlack w-[90%]  p-4 rounded-md mt-5 border flex gap-5 ">
                <form className="flex flex-col gap-2 flex-1">
                    <div>
                        <label htmlFor="name" className="label">
                            <p>Subject Name :</p>
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter Subject Name"
                            name="name"
                            className="input-box"
                            {...register("name", {
                                required: true,
                            })}
                        />
                    </div>

                    <div>
                        <label htmlFor="key-name" className="label">
                            <p>Subject Search key :</p>
                        </label>
                        <input
                            type="text"
                            id="key-name"
                            placeholder="Enter Subject Search Key"
                            name="key"
                            className="input-box"
                            {...register("key", {
                                required: true,
                            })}
                        />
                    </div>

                    <div>
                        <label htmlFor="sub-des" className="label">
                            <p>Subject Short Description :</p>
                        </label>
                        <textarea
                            rows="3"
                            cols="12"
                            type="text"
                            id="sub-des"
                            placeholder="Enter Subject Name"
                            name="subject-desc"
                            className="input-box"
                            {...register("description", {
                                required: true,
                            })}
                        />
                    </div>

                    <div>
                        <label htmlFor="name" className="label">
                            <p>Select Branch :</p>
                        </label>
                        <select
                            name="none"
                            id=""
                            className="input-box"
                            {...register("branchName", { required: true })}
                        >
                            {branchData?.map((item, id) => (
                                <option key={id} value={item?.name}>
                                    {item?.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="name" className="label">
                            <p>Subject Semester :</p>
                        </label>
                        <select
                            name="none"
                            id=""
                            className="input-box"
                            {...register("semesterName", { required: true })}
                        >
                            <option value="first">first</option>
                            <option value="second">second</option>
                            <option value="third">third</option>
                            <option value="fourth">fourth</option>
                            <option value="fifth">fifth</option>
                            <option value="sixth">sixth</option>
                            <option value="seventh">seventh</option>
                            <option value="eigth">eigth</option>
                        </select>
                    </div>
                </form>

                <div className="flex-[0.5] flex justify-center gap-10 flex-col border rounded-md p-3">
                    <div>
                        {previewImg && (
                            <div className="w-[260px] h-[150px]">
                                <img
                                    src={previewImg}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col justify-center items-center mb-4 ">
                        <label htmlFor="image">
                            <p>Upload Subject thumbnail : </p>
                        </label>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                            accept="image/png , image/gif , image/jpeg"
                        />
                        <button
                            onClick={handleClick}
                            className="mt-3 cursor-pointer rounded-md py-2 px-5 font-semibold border"
                        >
                            Select
                        </button>
                    </div>
                </div>
            </div>

            <div className=" self-center mr-20 mt-4">
                <button className="button" onClick={handleCreateSubject}>
                    Create
                </button>
            </div>
        </div>
    );
}

export default AddSubject;

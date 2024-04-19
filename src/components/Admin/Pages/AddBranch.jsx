import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { createBranchAPI } from "../../../services/operations/adminAPI";
function AddBranch() {
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

    const handleCreateBranch = async () => {
        const data = getValues();

        console.log("this is image file : ", imageFile);

        const formData = new FormData();

        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("image", imageFile);

        const result = await createBranchAPI(formData);
        console.log("this is data : ", result);
    };

    return (
        <div className="w-full mx-auto max-w-maxContent flex flex-col justify-center items-center h-[85vh]">
            <div className=" self-start ml-8 mt-5">
                <h1 className="font-semibold text-[25px]">Add Branch</h1>
            </div>
            <div className="bg-colorLightBlack w-[90%]  p-8 rounded-md mt-5 border flex gap-10">
                <form className="flex flex-col gap-4 flex-1">
                    <div>
                        <label htmlFor="name" className="label">
                            <p>Branch Name :</p>
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter Branch Name"
                            name="name"
                            className="input-box"
                            {...register("name", {
                                required: true,
                            })}
                        />
                    </div>

                    <div>
                        <label htmlFor="branch-des" className="label">
                            <p> Branch Short Description :</p>
                        </label>
                        <textarea
                            rows="4"
                            cols="12"
                            type="text"
                            id="branch-des"
                            placeholder="Enter Branch Name"
                            name="branch-desc"
                            className="input-box"
                            {...register("description", {
                                required: true,
                            })}
                        />
                    </div>
                </form>
                <div className="flex flex-col justify-center gap-10 flex-[0.7] border rounded-md p-3">
                    <div>
                        {previewImg && (
                            <div className="w-[300px] h-[150px]">
                                <img
                                    src={previewImg}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                        <label htmlFor="image">
                            <p>Upload Branch thumbnail : </p>
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
                <button className="button" onClick={handleCreateBranch}>
                    Create Branch
                </button>
            </div>
        </div>
    );
}

export default AddBranch;

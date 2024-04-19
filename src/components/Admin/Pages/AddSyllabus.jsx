import react, { useState } from "react";
import { uploadSyllabus } from "../../../services/operations/adminAPI";

function AddSyllabus() {
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState();

    const handleFileChange = (e) => {
        const tempFile = e.target.files[0];
        setFile(tempFile);
    };
    const handleUploadFile = async () => {
        try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("fileName", fileName);
            await uploadSyllabus(formData);
        } catch (error) {
            console.log("add syllabus error", error);
        }
    };
    return (
        <div className=" mx-auto max-w-maxContent flex flex-col gap-5 justify-center items-center h-[75vh]">
            <div className="text-[28px] font-semibold mt-5 justify-self-start self-start ml-36">
                <h1>Add Syllabus</h1>
            </div>

            <div className="bg-colorLightBlack p-9 border rounded-md w-[70%]">
                <form className="flex gap-7 flex-col">
                    <div>
                        <label htmlFor="files" className="label">
                            <p>Upload File : </p>
                        </label>

                        <input
                            type="file"
                            accept=".pdf"
                            onChange={handleFileChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="file-name" className="label">
                            <p>Enter File Name : </p>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter file Name : "
                            name="file-name"
                            onChange={(e) => setFileName(e.target.value)}
                            className="input-box"
                        />
                    </div>
                </form>
            </div>
            <div>
                <button className="button" onClick={handleUploadFile}>
                    Upload
                </button>

                <button
                    onClick={() => {
                        window.open(file, "_blank");
                    }}
                    className="button"
                >
                    Download PDF
                </button>
            </div>
        </div>
    );
}

export default AddSyllabus;

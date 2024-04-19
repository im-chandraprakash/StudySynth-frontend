import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
import toast from "react-hot-toast";
import { fetchShowContents } from "../../../services/operations/ContentAPI";
import { useNavigate } from "react-router-dom";
import { setContent } from "../../../reducers/slices/contentSlice";
import { useDispatch } from "react-redux";

function ShowContents() {
    const [contents, setContents] = useState("");
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const fetchData = async () => {
        const data = await fetchShowContents();
        // console.log(data);
        if (data) {
            data?.data.reverse();
            setContents(data?.data);
        }
    };

    const removeItem = (item) => {
        const updatedContents = contents.filter(
            (article) => article._id !== item._id
        );
        setContents(updatedContents);
    };

    const checkItem = (item) => {
        const updatedContents = contents.filter(
            (article) => article._id !== item._id
        );
        setContents(updatedContents);
        toast.success("Successfully added to the Database");
    };

    const readContent = (article) => {
        dispatch(setContent(article?.content));
        navigate("/admin/view-contents");
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className=" w-full max-w-maxContent mx-auto ">
            <h1 className=" text-2xl mt-2 font-semibold ">
                Articles Written by User{" "}
            </h1>

            <div className="flex flex-col gap-4 mt-5">
                {contents &&
                    contents?.map((article, id) => (
                        <div
                            className="flex justify-between text-white rounded-md   border-[0.2px] border-colorLavender cursor-pointer "
                            key={id}
                            
                        >
                            <div className="px-10  p-4 ">
                                <h1>{article?.title}</h1>
                                <p>{article?.subjectId?.name}</p>
                            </div>

                            <div
                                className="flex gap-2
                             "
                            >
                                <div className=" p-4  px-10 flex justify-center items-center bg-[#00800042]">
                                    <p className=" text-[yellow]">
                                        {article?.accuracy}
                                    </p>
                                </div>
                                <div
                                    className=" p-4  px-10 flex justify-center items-center bg-[#00800042]"
                                    onClick={() => checkItem(article)}
                                >
                                    <FaCheck
                                        size={30}
                                        className="text-[green]"
                                    />
                                </div>
                                <div
                                    className=" p-4  px-10 flex justify-center items-center bg-[#ff00005f]"
                                    onClick={() => removeItem(article)}
                                >
                                    <RxCross2
                                        size={30}
                                        className="text-[red]"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

            <h1>Bye</h1>
        </div>
    );
}

export default ShowContents;

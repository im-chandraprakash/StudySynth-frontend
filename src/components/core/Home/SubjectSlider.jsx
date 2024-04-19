import React, { useEffect, useState } from "react";
import { fetchAllSubjectsAPI } from "../../../services/operations/SubjectAndBranch";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import SubjectCard from "./SubjectCard";

function SubjectSlider() {
    const [subjectData, setSubjectData] = useState("");

    const fetchData = async () => {
        const data = await fetchAllSubjectsAPI();

        console.log("slider sub", data);

        if (data) {
            setSubjectData(data);
        }

        console.log("got data to subject Slider page", subjectData);
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="w-full max-w-maxContent mx-auto flex flex-col gap-14">
            <div className="text-3xl font-semibold"> Engineering Subjects</div>
            <Swiper
                slidesPerView={3}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper flex justify-center items-center w-full h-full"
            >
                {subjectData &&
                    subjectData?.map((subject, id) => (
                        <SwiperSlide
                            key={id}
                            className="flex  justify-center items-center "
                        >
                            <SubjectCard subject={subject} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}

export default SubjectSlider;

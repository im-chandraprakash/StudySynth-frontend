import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import './styles.css';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { fetchAllBranchAPI } from "../../../services/operations/ContentAPI";
import CarousalSlide from "./CarousalSlide";

function HomeCarousals() {
    const [branchData, setBranchData] = useState(null);

    async function fetchData() {
        const data = await fetchAllBranchAPI();
        if (data) {
            // console.log("data", data);
            setBranchData(data);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="max-w-maxContent w-full mx-auto mt-10">
            <div className="w-full h-full ">
                <h1 className="text-3xl font-semibold my-5">
                    {" "}
                    Engineering Branches{" "}
                </h1>
                <Swiper
                    // slidesPerGroup={3}
                    slidesPerView={3}
                    spaceBetween={30}
                    // height={300}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper w-full h-[350px] flex items-center justify-center"
                >
                    {branchData?.map((item, id) => (
                        <SwiperSlide
                            key={item._id}
                            className="w-full h-[84%] flex items-center justify-center"
                        >
                            <CarousalSlide slideData={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* <div className="flex items-center gap-14">
                    <CarousalSlide item={branchData ? branchData[0] : ""} />
                    <CarousalSlide item={branchData ? branchData[1] : ""} />
                    <CarousalSlide item={branchData ? branchData[2] : ""} />
                </div> */}
            </div>
        </div>
    );
}

export default HomeCarousals;

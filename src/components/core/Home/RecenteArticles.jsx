import React, { useEffect, useState } from "react";
import {fetchRecentArticles} from '../../../services/operations/contentAPI'

function RecenteArticles() {
    const [articles, setArticles] = useState(null);

    const fetchData = async () => {
        try {
            const daa = await fetchRecentArticles();
        } catch (error) {
            console.log("Recent Article error ", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return <div>RecenteArticles</div>;
}

export default RecenteArticles;

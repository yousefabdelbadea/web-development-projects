import axios from "axios";
import React, { useEffect, useState } from "react"

export default function UseFetch(apiPath,queryTerm="") {
        const [data,setData] = useState([]);
        const url = `https://api.themoviedb.org/3/${apiPath}?api_key=b80d59c33d6d57ed9c7e3713f91c188a&query=${queryTerm}`;
        function getMovies(){
            axios.get(url)
            .then(({ data }) => setData(data.results))
            .catch(() => {});
        }
        
        useEffect(()=>{
            getMovies();
        },[url])
        

    return {data}

};


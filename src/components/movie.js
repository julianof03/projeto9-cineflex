import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect} from "react";
export default function Movie(){
    const [movie, SetMovie] = useState([]);
    const { movieId } = useParams();
    
    useEffect(() => {
        const promise = axios.get(
            `https://mock-api.driven.com.br/api/v7/cineflex/movies/${movieId}/showtimes`
        );
        promise.then((res) => {
            SetMovie(res.data)
        });
    }, [movieId]);
    const newarr = movie.days;
    console.log(newarr);
    return(
        <div>         
            {newarr.map(item => <div>{item.date}</div>)}
        </div> 
 
    );
}                     
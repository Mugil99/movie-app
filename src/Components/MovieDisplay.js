import { useState } from "react";
import MovieDetails from "./MovieDetails";
const MovieDisplay=(props)=>{
    const {moviesArr}=props;
    console.log(moviesArr)
    const [details,setDetails]=useState({});
    // const[show,setShow]=useState(false);
    function displayDetails(movie){
    //    setShow(!show)
       setDetails(movie);
    }
    return(
       <div style={{display:"flex",flexWrap:"wrap",gap:"20px"}}>
        {
            moviesArr.map((movie,index)=>(
                <div onClick={()=>{displayDetails(movie)}} className={details===movie?"border":""}>
                    <img src={movie.image} style={{height:"200px", width:"200px"}}></img>
                     {
                        (details===movie) && (
                            <MovieDetails details={details}/>
                        )
                     }
                </div>
            ))
        }
       </div>
    )
}
export default MovieDisplay
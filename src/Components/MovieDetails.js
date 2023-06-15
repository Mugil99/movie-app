const MovieDetails=(props)=>{
    const {details}=props;
    return(
        <div>
            <h1 style={{margin:"5px"}}>Title: {details.name}</h1>
            <h3 style={{margin:"3px"}}>Genere: {details.genere}</h3>
            <h4 style={{margin:"2px"}}>ratings: {details.rating}</h4>
        </div>
    )
}
export default MovieDetails;
const Movie = ({ movie, onDeleteMovie }) => {

    // Skapar stjärnor baserat på betyg - från assignment_3.js
    const stars = []
    for (let i = 0; i < movie.betyg; i++) {
        stars.push(<img key={i} src="/images/star.png" alt="Star" />)
    }

    return (
        <li>
            {movie.titel}
            {stars}
            <img 
                src="/images/delete.png" 
                alt="Delete movie" 
                className="delete-movie-icon"
                onClick={() => onDeleteMovie(movie)}
            />
        </li>
    )
}

export default Movie
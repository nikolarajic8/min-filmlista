const Movie = ({ movie, onDeleteMovie }) => {

    // Skapar stjärnor baserat på betyg
    const stars = [];

    for (let i = 0; i < movie.grade; i++) {
        stars.push(
            <img
                key={i}
                src="/images/star.png"
                alt="Star"
                className="star-icon"
            />
        );
    }

    return (
        <li className="list-group-item movie-item">
            
            {/* Filmtitel */}
            <span>{movie.title}</span>

            {/* Höger sida */}
            <div className="d-flex align-items-center">

                {/* Stjärnor */}
                <div className="me-3">
                    {stars}
                </div>

                {/* Delete ikon */}
                <img
                    src="/images/delete.png"
                    alt="Delete movie"
                    className="delete-movie-icon"
                    onClick={() => onDeleteMovie(movie.id)}
                />
            </div>

        </li>
    );
};

export default Movie;
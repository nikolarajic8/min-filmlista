
import Movie from "./Movie";

const MovieList = ({ movies, onDeleteMovie }) => {
    return (
        <ul className="list-group">
            {movies.map((movie) => (
                <Movie
                    key={movie.id}
                    movie={movie}
                    onDeleteMovie={onDeleteMovie}
                />
            ))}
        </ul>
    );
};

export default MovieList;


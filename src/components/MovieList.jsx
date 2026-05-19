import Movie from './Movie'

const MovieList = ({ movies, onDeleteMovie }) => {
    return (
        <ul id="movies">
            {movies.map((movie, index) => (
                <Movie key={index} movie={movie} onDeleteMovie={onDeleteMovie} />
            ))}
        </ul>
    )
}

export default MovieList
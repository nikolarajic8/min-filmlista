import { useState } from 'react'
import AddMovieForm from './components/AddMovieForm'
import MovieList from './components/MovieList'

const App = () => {
    const [movies, setMovies] = useState([])

    const onAddMovie = (movie) => {
        setMovies([...movies, movie])
    }

    const onDeleteMovie = (movie) => {
        setMovies(movies.filter(m => m !== movie))
    }

    return (
        <div className="container">
            <h1>Min filmlista</h1>
            <AddMovieForm onAddMovie={onAddMovie} />
            <hr />
            <h2>Filmer</h2>
            <MovieList movies={movies} onDeleteMovie={onDeleteMovie} />
        </div>
    )
}

export default App
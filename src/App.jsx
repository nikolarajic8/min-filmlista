import { useState } from "react";
import AddMovieForm from "./components/AddMovieForm";
import MovieList from "./components/MovieList";

function App() {

    // Tom lista från början
    const [movies, setMovies] = useState([]);

    // Lägg till film
    const addMovie = (movie) => {
        setMovies([...movies, movie]);
    };

    // Ta bort film
    const deleteMovie = (id) => {
        const updatedMovies = movies.filter(
            (movie) => movie.id !== id
        );

        setMovies(updatedMovies);
    };

    // Sortera alfabetiskt
    const sortByTitle = () => {
        const sortedMovies = [...movies].sort((a, b) =>
            a.title.localeCompare(b.title)
        );

        setMovies(sortedMovies);
    };

    // Sortera efter betyg
    const sortByGrade = () => {
        const sortedMovies = [...movies].sort(
            (a, b) => b.grade - a.grade
        );

        setMovies(sortedMovies);
    };

    return (
        <div className="container mt-5 movie-app">

            <h1>Min filmlista</h1>

            {/* Formulär */}
            <AddMovieForm addMovie={addMovie} />

            {/* Rubrik */}
            <h2 className="mt-5">Inlagda filmer</h2>

            {/* Lista */}
            <MovieList
                movies={movies}
                onDeleteMovie={deleteMovie}
            />

            {/* Sorteringsknappar */}
            <div className="mt-3">

                <button
                    className="btn btn-primary me-2"
                    onClick={sortByTitle}
                >
                    Alfabetisk ordning
                </button>

                <button
                    className="btn btn-primary"
                    onClick={sortByGrade}
                >
                    Betygsordning
                </button>

            </div>

        </div>
    );
}

export default App;


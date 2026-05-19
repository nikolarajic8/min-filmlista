import { useState } from 'react'

const App = () => {
    // Sparar alla filmer 
    const [movies, setMovies] = useState([])

    return (
        <div>
            <h1>Min filmlista</h1>
        </div>
    )
}

export default App
import { useState } from "react";

function AddMovieForm({ addMovie }) {
  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validering
    if (title.trim() === "" || grade === "") {
      alert("Du måste ange titel och betyg!");
      return;
    }

    const newMovie = {
      id: Date.now(),
      title: title,
      grade: Number(grade),
    };

    addMovie(newMovie);

    // Återställ formulär
    setTitle("");
    setGrade("");
  };

  return (
    <div className="mt-4">
      <h2>Lägg till en film</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Titel:</label>

          <input
            type="text"
            className="form-control"
            placeholder="Titel här..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Betyg:</label>

          <select
            className="form-select"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          >
            <option value="">Välj betyg här...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <button className="btn btn-success">Spara film</button>
      </form>
    </div>
  );
}

export default AddMovieForm;
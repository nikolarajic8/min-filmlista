const AddMovieForm = ({ onAddMovie }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const titel = e.target.titel.value
        const betyg = e.target.betyg.value

        if (!titel || betyg == "0") {
            alert("Fyll i både titel och betyg!")
            return
        }

        onAddMovie({ titel, betyg })
        e.target.reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Lägg till en film</legend>
                <label>Titel:</label>
                <input type="text" name="titel" className="form-control" placeholder="Titel här..." />
                
                <label>Betyg:</label>
                <select name="betyg" className="form-control">
                    <option value="0">Välj betyg...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <button type="submit" className="btn btn-success mt-3">Spara film</button>
            </fieldset>
        </form>
    )
}

export default AddMovieForm
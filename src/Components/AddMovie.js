import React, {useState} from "react";

const initialValues = { name: "", image: "", overview: "", ratings: "" };
function AddMovie({ postMovies }) {
  const [formData, setFormData] = useState(initialValues);

  function handleChange(event) {
    setFormData((formData) => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    postMovies(formData);
    setFormData(initialValues);
  }

  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="inline fields">
          <input
          className="add-movie"
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name of Movie"
            onChange={handleChange}
            required
          />
          <input
          className="add-movie"
            type="text"
            name="image"
            placeholder="Image"
            value={formData.image}
            onChange={handleChange}
            required
          />
          <input
          className="add-movie"
            type="text"
            name="overview"
            placeholder="Overview"
            value={formData.overview}
            onChange={handleChange}
            required
          />
          <input
          className="add-movie"
            type="number"
            name="ratings"
            placeholder="Ratings"
            step="1"
            value={formData.ratings}
            onChange={handleChange}
            required
          />
        </div>

        <button className="button" type="submit">
          Add Movie
        </button>
      </form>
    </div>
  );
}

export default AddMovie;

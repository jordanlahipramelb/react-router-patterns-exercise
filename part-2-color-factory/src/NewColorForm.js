import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

// addColor from handleAddColor in Routes
function NewColorForm({ addColor }) {
  const [formData, setFormData] = useState({
    name: "",
    hex: "#ffffff",
  });
  const history = useHistory();

  function handleChange(e) {
    e.persist();

    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // adds color to the color state in Routes
    addColor({ [formData.name]: formData.hex });

    // redirects to '/colors'
    history.push("/colors");
  }

  const { hex, name } = formData;

  return (
    <div className="NewColorForm">
      <h1>Add Color</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            placeholder="Enter color name"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="hex">Color value</label>
          {/* type allows you to select color from graph */}
          <input
            type="color"
            name="hex"
            id="hex"
            onChange={handleChange}
            value={hex}
          />
        </div>
        <button>Add Color</button>
        <h3>
          <Link to="/">Go Back</Link>
        </h3>
      </form>
    </div>
  );
}

export default NewColorForm;

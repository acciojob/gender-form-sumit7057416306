import React, { useState } from "react";
function GenderForm() {
  const [gender, setGender] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  // Gender selection handler
  const handleGenderChange = (event) => {
    setGender(event.target.value);
    setSelectedSize(""); // Reset size when gender changes
  };

  // Size selection handler
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <div>
      <h2>Select your gender:</h2>
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === "male"}
          onChange={handleGenderChange}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === "female"}
          onChange={handleGenderChange}
        />
        Female
      </label>

      {gender === "male" && (
        <div>
          <h2>Select your shirt size:</h2>
          <select value={selectedSize} onChange={handleSizeChange}>
            <option value="">Select size</option>
            <option value="s">Small</option>
            <option value="m">Medium</option>
            <option value="l">Large</option>
          </select>
        </div>
      )}

      {gender === "female" && (
        <div>
          <h2>Select your dress size:</h2>
          <select value={selectedSize} onChange={handleSizeChange}>
            <option value="">Select size</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
          </select>
        </div>
      )}
    </div>
  );
}
export default GenderForm;

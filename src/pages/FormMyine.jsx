import React, { useEffect, useState } from "react";

function FormMyine() {
  const [formData, setFormData] = useState({ name: "", age: "", gender: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    localStorage.setItem("formdata", JSON.stringify(formData));
    alert("stored");
  };

  const getData = () => {
    setFormData(
      JSON.parse(localStorage.getItem("formdata")) || {
        name: "",
        age: "",
        gender: "",
      }
    );
  };

  useEffect(() => {
    getData();
    var t = 0;
    console.log((t = t + 1));
  }, []);
  return (
    <div>
      <h2>FORM</h2>
      <input
        type="string"
        onChange={handleChange}
        name="name"
        value={formData.name}
      />
      <input
        type="number"
        onChange={handleChange}
        name="age"
        value={formData.age}
      />
      <select onChange={handleChange} name="gender" value={formData.gender}>
        <option>Male</option>
        <option>Female</option>
      </select>
      <button onClick={handleSubmit}>Submit</button>
      <p>{JSON.stringify(formData)}</p>
    </div>
  );
}

export default FormMyine;

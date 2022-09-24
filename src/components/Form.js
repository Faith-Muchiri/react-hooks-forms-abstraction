import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  });

  // function handleFirstNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     firstName: event.target.value,
  //   });
  // }

  // function handleLastNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     lastName: event.target.value,
  //   });
  // }
  function handleChange(event){
      // name is the KEY in of the formData object we're trying to update
    const name = event.target.name;
    let value = event.target.value;

      // use `checked` property of checkboxes instead of `value`
      if (event.target.type === "checkbox") {
        value = event.target.checked;
      }

      // event.target.type ? "checkbox" ? event.target.checked :event.target.value

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <form>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
            <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
    </form>
  );
}
export default Form;

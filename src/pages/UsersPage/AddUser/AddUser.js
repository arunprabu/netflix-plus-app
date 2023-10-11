import axios from "axios";
import { useState } from "react";

const AddUser = () => {
  // controlled component
  // * An input form element whose value is controlled by React

  const [nameInput, setNameInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [emailInput, setEmailInput] = useState('');

  const handleAddUser = (event) => {
    // stop the page refresh
    event.preventDefault();
    // read the form data
    // Let's construct an object to send the data to the rest api
    const formData = {
      name: nameInput,
      phone: phoneInput,
      email: emailInput,
    };

    console.log(formData);

    // How to send the above formData to the REST API?
    // 1. What's the REST API URL? https://jsonplaceholder.typicode.com/users
    // 2. What's the HTTP Method? POST
    // 3. What's the REST API Client? axios
    axios.post("https://jsonplaceholder.typicode.com/users", formData)
      .then( (res) => {
        console.log(res);
        alert("Saved Successfully!");
        // TODO: try using https://www.npmjs.com/package/react-toastify
      })
      .catch((err) => {
        console.log(err);
        alert(err);
        // TODO: try using https://www.npmjs.com/package/react-toastify
      })
      .finally(() => {
        console.log('It is over!');
      });
  }

  return (
    <div className="row">
      <h1>Create New User</h1>
      <div className="col-md-4 offset-md-4">
        <button type="button" className="btn btn-secondary">
          Go Back
        </button>
        <form onSubmit={handleAddUser}>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Name
            </label>
            {/* Controlled Component  */}
            <input
              type="text"
              className="form-control"
              id="nameInput"
              value={nameInput}
              onChange={(event) => {
                setNameInput(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneInput" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phoneInput"
              value={phoneInput}
              onChange={(event) => {
                setPhoneInput(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              value={emailInput}
              onChange={(event) => {
                setEmailInput(event.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;

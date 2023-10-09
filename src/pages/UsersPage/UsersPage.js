import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UsersPage = () => {
  // How to connect to the REST API?
  // 1. What's the REST API URL? https://jsonplaceholder.typicode.com/users
  // 2. What's the HTTP Method? GET
  // 3. What's the REST API Client Tool? // axios (third party tool) / fetch (native JS api)
  console.log("1. Program Started");
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // this will be called after initial rendering
    // ideal place for you send request to rest api
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // successful response
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        // if error occurs
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        // will be called at last
        setIsLoading(false);
        console.log("It is over!");
      });
    console.log("3. Inside useEffect");
  }, []);

  console.log("2. Program Ended");

  return (
    <section className="py-5 container">
      <div className="row py-lg-5 text-center ">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Welcome to User Management App!</h1>
          <p className="lead text-body-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            dictum suscipit semper. Nulla id scelerisque libero. Duis
            ullamcorper finibus augue vitae aliquam.
          </p>
          <p>
            <Link to="/users/add" className="btn btn-primary my-2">
              Create New User
            </Link>
          </p>
        </div>
      </div>

      <div className="row">
        <h2>Listing Users</h2>
        {isLoading && <div className="spinner-border text-success"></div>}

        {isError && (
          <div className="alert alert-danger">
            Some Error Occurred! Try again Later!
          </div>
        )}

        {users.map((user) => {
          return (
            <div className="col-md-3" key={user.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    #{user.id} {user.name}
                  </h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    Email: {user.email}
                  </h6>
                  <p className="card-text">Phone: {user.phone}</p>
                  <Link to={`/users/${user.id}`} className="card-link">
                    View More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UsersPage;

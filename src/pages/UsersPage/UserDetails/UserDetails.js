import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  // Read url param using react-router-dom
  const { userId } = useParams();
  console.log(userId);

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // this will be after the initial rendering
    // ideal place for you to hit the rest api
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        console.log("it is over!");
        setIsLoading(false);
      });
  }, [userId]);

  return (
    <div className="row mt-2">
      <h1>User Details</h1>
      {isLoading && <div className="spinner-border"></div>}

      {isError && (
        <div className="alert alert-danger">
          Some Error Occurred. Try again later
        </div>
      )}

      {!isError && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              #{user.id} {user.name}
            </h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Email: {user.email}
            </h6>
            <p className="card-text">Phone: {user.phone}</p>
            <button type="button" className="btn btn-primary">
              Edit
            </button>
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;

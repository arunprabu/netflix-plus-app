import React, { useContext } from "react";
import { PageContext } from "../../contexts/PageContext";

const ContactUsPage = () => {
  // Step 3 of any to any comp commn using context api:
  // Let's receive the data using useContext()
  const userStatus = useContext(PageContext);
  console.log(userStatus);

  return (
    <div>
      <h1>ContactUsPage</h1>
      <p>Username: {userStatus.username}</p>
      <p>Last Login: {userStatus.lastLogin.toString()}</p>
      <p>Is Premium User: {userStatus.isPremiumUser}</p>
    </div>
  );
};

export default ContactUsPage;

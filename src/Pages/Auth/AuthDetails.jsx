import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../Services/Firebase.auth";

const AuthDetails = () => {
  const [authUSer, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  }, []);
  return (
      <div>{authUSer ? <p> {`Logged In as ${authUSer.email}`} </p> : <p> Not Logged In</p>} </div>
  )
};

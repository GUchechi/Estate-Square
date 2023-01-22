import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth();
  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  return user ? <h1>{user.displayName}</h1> : "Not Logged in";
};

export default Profile;

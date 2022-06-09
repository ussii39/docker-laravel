import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectRender = () => {
  const [user, setUser] = useState({} as any);
  useEffect(() => {
    const fetchUser = async () => {
      const users = await fetchJson();
      setUser(users);
      console.log(users, "usersss");
    };
    fetchUser();
  }, []);

  const fetchJson = async () => {
    const user = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    return user.data;
  };
  return (
    <div>
      {user ? (
        <p>
          I am {user.username}:{user.email}
        </p>
      ) : null}
    </div>
  );
};

export default UseEffectRender;

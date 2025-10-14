import { useState, useEffect } from "react";
import axios from "axios";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <ul>
      {users.map((u, index) => (
        <li key={u.id}>
          {index + 1} {u.name} - {u.email}
        </li>
      ))}
    </ul>
  );
}

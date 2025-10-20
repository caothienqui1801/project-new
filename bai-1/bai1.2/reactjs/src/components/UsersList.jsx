import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

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

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div>
      <h2>Danh sách người dùng</h2>

      {/*Ô nhập tìm kiếm*/}

      <input
        type="text"
        placeholder="Tìm kiếm tên user tại đây!"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: 10, padding: 5 }}
      />

      {/* Danh sách kết quả */}
      <ul>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((u, index) => (
            <li key={u.id}>
              <Link to={`/users/${u.id}`}>
                {index + 1} {u.name}
              </Link>{""}
              -{u.email}
            </li>
          ))
        ) : (
          <p>Không tìm thấy người dùng!!</p>
        )}
      </ul>
    </div>
  );
}

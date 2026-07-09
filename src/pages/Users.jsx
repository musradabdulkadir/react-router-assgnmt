import { Link } from "react-router-dom";
import users from "../data/users";

function Users() {
  return (
    <div className="container">
      <h1>Users</h1>

      {users.map((user) => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>
            {user.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Users;
import { useParams, useNavigate } from "react-router-dom";
import users from "../data/users";

function UserDetail() {
  const { id } = useParams();

  const navigate = useNavigate();

  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return <h2>User Not Found</h2>;
  }

  return (
    <div className="container">
      <h1>User Details</h1>

      <h2>{user.name}</h2>

      <p>Email: {user.email}</p>

      <button onClick={() => navigate("/users")}>
        Go Back
      </button>
    </div>
  );
}

export default UserDetail;
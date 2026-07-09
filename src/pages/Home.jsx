import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Home Page</h1>

      <p>Welcome to the React Router Assignment.</p>

      <Link to="/about">About</Link>

      <br />

      <Link to="/users">Users</Link>
    </div>
  );
}

export default Home;
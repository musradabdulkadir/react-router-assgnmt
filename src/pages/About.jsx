import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container">
      <h1>About Page</h1>

      <p>
        This application demonstrates React Router, navigation, route
        parameters, and multiple pages.
      </p>

      <Link to="/">Go Home</Link>
    </div>
  );
}

export default About;
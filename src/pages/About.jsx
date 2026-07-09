import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container">
      <h1>About This Application</h1>

      <p>
        The User Directory Application is a simple multi-page React application
        built to demonstrate the implementation of client-side routing using
        React Router. It provides a clean and intuitive interface for navigating
        between different pages while showcasing the power of dynamic routing.
      </p>

      <h2>Purpose of the Application</h2>

      <p>
        The primary goal of this project is to help developers understand how
        React Router works by implementing multiple pages, navigation links,
        parameterized routes, and dynamic content rendering. Instead of
        reloading the browser for every page change, React Router enables smooth
        and efficient navigation within a single-page application (SPA).
      </p>
      <hr />
      <br />
      <h2>Technologies Used</h2>
      <br />

      <ul>
        <li> React.js</li>
        <li> React Router DOM</li>
        <li>CSS for styling</li>
        <li> JavaScript (ES6+)</li>
      </ul>
      <br />
      <br />
      <hr />

      <h2>Key Features</h2>

      <ul>
        <li>Multi-page navigation using React Router.</li>
        <li>Persistent navigation bar with active link highlighting.</li>
        <li>Dynamic user detail pages using URL parameters.</li>
        <li>Mock user data displayed through reusable React components.</li>
        <li>Responsive and user-friendly interface.</li>
      </ul><br /><br />
<hr />
      <p>
        This project serves as a foundation for building larger React
        applications that require structured navigation and dynamic routing.
      </p>

      <Link to="/">← Back to Home</Link>
    </div>
  );
}

export default About;

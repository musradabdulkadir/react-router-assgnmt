
export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to the User Directory Application</h1>

      <p>
        Welcome to the User Directory Application, a simple React project
        designed to demonstrate the fundamentals of client-side routing using
        React Router. This application allows users to navigate seamlessly
        between different pages without reloading the browser, providing a fast
        and smooth user experience.
      </p>

      <h2>About This Application</h2>

      <p>
        The application consists of four main sections: Home, About, Users, and
        User Details. The Users page displays a list of mock user data, and each
        user can be selected to view their detailed information, including their
        name and email address. Dynamic routing is used to display information
        based on the selected user's ID.
      </p>

      <h2>Features</h2>

      <ul>
        <li> Responsive Home page with application overview.</li>
        <li> About page describing the application's purpose.</li>
        <li> User list generated from mock data.</li>
        <li> Dynamic user detail pages using route parameters.</li>
        <li> Persistent navigation bar with active link highlighting.</li>
        <li> Fast navigation using React Router.</li>
      </ul>
      <br /><br />
      <hr />

      <p>
        Use the navigation bar above to explore the different sections of the
        application and experience how React Router enables smooth navigation
        between pages.
      </p>
    </div>
  );
}


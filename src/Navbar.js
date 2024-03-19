import { Link } from 'react-router-dom';
import './Navbar.css';

const  Navbar = () => {
  // simple example of using an inline style
  // const linkStyle = {
  //   color: "white",
  //   backgroundColor: "#f1356d",
  //   borderRadius: "8px"
  // };

  // or we can do this in the JSX
  {/* <a href="/" style={linkStyle}>Home</a>
  <a href="/create" style={{
    color: "white",
    backgroundColor: "#f1356d",
    borderRadius: "8px"
  }}>New Blog</a> */}

  return (
    <nav className="navbar">
      <h1>A Simple React Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;

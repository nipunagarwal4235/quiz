import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Link to="/user">User</Link> | <Link to="/admin">Admin</Link>
    </>
  );
}

export default App;

import { Link } from "react-router-dom";

function Main() {
    return (
      <div>
        <h1>This is the Main page</h1>
        <Link to="message">Click to view our about page</Link>
      </div>
    );
  }
  
  export default Main;
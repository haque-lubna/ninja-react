import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Error 404</h1>
            <p>Page not found!</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
}
 
export default NotFound;
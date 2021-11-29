import {Link} from "react-router-dom";


const Notfound = () => {
    return ( 
        <div className="notFound">
        <h2>Sorry</h2>
        <p>Page Not Found</p>
        <Link to="/">Back to the home page</Link>
        </div>
     );
}
 
export default Notfound;
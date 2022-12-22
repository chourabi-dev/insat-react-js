import Navbar from "../compoenents/Navbar";
import { Link } from "react-router-dom";

export default function ErrorPage(){
    return(
        <div>

            <Navbar />
            

            <h1 className="text-center">404 not found</h1>
            <p className="text-muted text-center">back to <Link to={ "/" }>home page</Link> </p>
        </div>
    )
}
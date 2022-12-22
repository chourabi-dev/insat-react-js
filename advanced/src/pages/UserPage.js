import { useParams } from 'react-router-dom';

    
export default function UserPage(){

    // get the user ID from the URL !!!

    const params = useParams();
 
    console.log(params);

    return(
        <div>
            <h1>Getting user N° { params.id } info....</h1>
        </div>
    );
}
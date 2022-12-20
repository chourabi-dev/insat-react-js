// function componenet

                        // PROPS !!!!
export default function Contact(props){

    /**
     * console.log(props);

        console.log(props.email);
     */

   /**
    * value test
    *  return(
        <div>
            <h3> 
                { props.fullname == null ? 
                'missing fullname' :
                 props.fullname } </h3>
            <p>
                { props.email == null ? 'missing email' : props.email } 
            </p>
        </div>
        
    );
    */



    if ( props.fullname==null || props.email == null ) {
        return(
            <div>
                <h3>Missing informations...</h3>
            </div>
        );
    } else {

        return(
            <div>
                <h3> 
                    { props.fullname } </h3>
                <p>
                    { props.email } 
                </p>
            </div>
        );
        
    }




}


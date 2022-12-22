import React from "react";

export default class ContactForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:''
        }
    }


    sendDataToServer(){
        console.log("sending...");

        console.log(this.state);
    }



    render(){
        return(
            <div>
                <form  onSubmit={ (event)=>{ 
                    event.preventDefault();
                    this.sendDataToServer();
                    
                    } }   >

                    <div>
                        <label>Email</label>
                        <input value={ this.state.email }  
                        onChange={ (event)=>{ this.setState({ email:event.target.value }) } }   
                        type={"email"}
                        className={ this.state.email==="" ? "form-control is-invalid": "form-control is-valid" } />
                    </div>

                    <div className="mt-3">
                        <button disabled={ this.state.email==="" }   
                        className="btn btn-primary" type="submit">Send</button>
                    </div>
                    

                </form>
            </div>
        );
    }
}
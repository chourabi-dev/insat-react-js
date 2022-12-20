import React from "react";

export default class InputDemo extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            input: ''
        }
    }
 
    render(){
        return(
            <div>

                <h3>{ this.state.input }</h3>

                <input type="text"  onChange={ (event)=>{ 
                    const value = event.target.value; 

                    this.setState({ input: value }) 
                    
                 }}   />

            </div>
        );
    }
}
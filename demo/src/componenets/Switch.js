import React from "react";

export default class Switch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            btnState: false
        }
    }

    render(){
        return(

            <div   onClick={ ()=>{
                this.setState({  btnState: ! this.state.btnState  })
            } } 
            
            className={ this.state.btnState=== false ? "switch" : "switch active"  } >
                <div></div>
            </div>


        );
    }
}
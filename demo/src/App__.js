import React from "react";
import Counter from "./componenets/Counter";
import Switch from "./componenets/Switch";

export default class App extends React.Component{
    constructor(props){
        super(props);

        console.log("constructor");
    }


    componentDidMount(){
        console.log("did mount");
    }


    componentDidCatch(){
        // each time we need to catch some errros !!!
    }

    componentWillUnmount(){
        console.log("about to quit to the screen");
    }


    componentDidUpdate(){
        // each time the !! STATE !! changes !!!
    }


    /**
     * 
     * <Counter /> 
               
     */
    render(){
        return(
            <div>
                <Switch />

                <Switch />

                <Switch />

                <Switch />

                
               
            </div>
            
        );
    }
}
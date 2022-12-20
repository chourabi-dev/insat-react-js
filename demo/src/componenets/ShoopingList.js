import React from "react";

export default class ShoppingList extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            items: [],
            shoppingInput:""
        }
    }

    render(){
        return(
            <div>
                <h3>Shopping List</h3>

                <button   onClick={ ()=>{
                    this.setState({ items: [] })
                } }    >clear list</button>

                <ul>
                   
                    {
                        this.state.items.map((i)=>{
                            return(
                                <li key={ i.id }>
                                    <p>
                                        <strong>{ i.title }</strong> <br/>
                                        <small>{ i.date.getFullYear() }</small>
                                    </p>
                                </li>
                                
                            );
                        })
                    }
                    


                </ul>


                <input type="text" onChange={ (event)=>{
                    this.setState({ shoppingInput: event.target.value })
                } } 

                value={ this.state.shoppingInput }
                />
                
                <button  onClick={ ()=>{ 

                    const item = { id:(this.state.items.length+1),  title:this.state.shoppingInput, date: new Date() }

                    let tmp = this.state.items;

                    tmp.push(item);
                    
                    this.setState({ items: tmp, shoppingInput:"" });

                } }  >Add</button>
            </div>
        );
    }
}
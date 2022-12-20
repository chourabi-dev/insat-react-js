import React from "react";
import Navbar from "./componenets/Navbar";
import Product from "./componenets/Product";
import ShoppingList from "./componenets/ShoopingList";

export default class App extends React.Component{
    constructor(props){
        super(props); 
        
    }
 
    render(){
        return(
            <div>

                <Navbar />


                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <Product  title="demo product"   photoURL="https://t3.ftcdn.net/jpg/03/12/58/70/360_F_312587030_R2IYXEQ64KGKygpFIifL4Jqxvz9akg31.jpg"   />
                        </div>
                        <div className="col-md-4">
                            <Product  title="demo product"   photoURL="https://t3.ftcdn.net/jpg/03/12/58/70/360_F_312587030_R2IYXEQ64KGKygpFIifL4Jqxvz9akg31.jpg"   />
                        </div>
                        <div className="col-md-4">
                            <Product  title="demo product"   photoURL="https://t3.ftcdn.net/jpg/03/12/58/70/360_F_312587030_R2IYXEQ64KGKygpFIifL4Jqxvz9akg31.jpg"   />
                        </div>
                        


                    </div>
                </div>
                

               {
                /**
                 *  <ShoppingList />
                 */
               }
 

            </div>
        );
    }
}
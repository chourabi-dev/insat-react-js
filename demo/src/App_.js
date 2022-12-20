//function component

import Contact from "./componenets/Contact";

function App() {



 /**
  *  const contacts = [
    { id:1, fullname:"chourabi taher1", email:"tchourabi@gmail.com1" },
    { id:2, fullname:"chourabi taher2", email:"tchourabi@gmail.com2" },
    { id:3, fullname:"chourabi taher3", email:"tchourabi@gmail.com3" },
    
  ]; // maybe this infos we got them from a server !!! 

  return(
    <div>
      {
        contacts.map( (c)=>{
          return(  <Contact key={ c.id }  fullname={c.fullname}  email={c.email} />);
        })
      }
    </div>
  );
  */

  

 /* 
 const element = <h1>bonjour</h1>;
 return (
    <div >

        { element }

        <Contact   fullname="chourabi taher" email="tchourabi@gmail.com"   /> 
        <Contact   fullname="chourabi taher 2" email="tchourabi@gmail.com2"   />  
        <Contact  /> 
    </div>
  );*/
}

export default App;

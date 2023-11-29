import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
function handlefName(event){
  setContact({
    fName: event.target.value,
    lName: contact.lName,
    email: contact.email
  })
}
function handlelName(event){
  setContact({
    fName: contact.fName,
    lName: event.target.value,
    email: contact.email
  })
}
function handleEmail(event){
  setContact({
    fName: contact.fName,
    lName: contact.lName,
    email: event.target.value
  })
}
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" onChange={handlefName} placeholder="First Name" />
        <input name="lName" onChange={handlelName} placeholder="Last Name" />
        <input name="email" onChange={handleEmail} placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

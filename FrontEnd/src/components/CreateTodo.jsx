import React, { useState } from "react";

function CreateTodo() {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   return (
      <div>
         <input
            type="text"
            name=""
            id=""
            placeholder="Todo Title here"
            onChange={(e) => {
               const value = e.target.value;
               setTitle(e.target.value);
            }}
         />
         <br />
         <br />
         <input
            type="text"
            name=""
            id=""
            placeholder="Todo description here"
            onChange={(e) => {
               const value = e.target.value;
               setDescription(e.target.value);
            }}
         />
         <br />
         <br />
         <button className="shadow__btn"
         onClick={()=>{
          //not using axious
          fetch("http://localhost:3000/todo",{
            method : "POST",
            body: JSON.stringify({
              title:title,
              description:description,
            }),
            headers:{
              "Content-type":"application/json"
            }
          }).then(async function(res){
            const json = await res.json();
            alert("Todo Added")
          })
         }}
         >Add TODO</button>
      </div>
   );
}

export default CreateTodo;

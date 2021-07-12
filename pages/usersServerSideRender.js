import React, {useEffect, useState } from "react";
import axios from 'axios';


function Users({users}) {
  
  return (
    <div>
      {users.map((user )=> (
        <h1 key={user.id}>sou {user.name}</h1>
      ))}
    </div>
  )
};
export async function getServerSideProps(ctx){

    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data = await response.data;
    console.log(data)
  return {
    props: {users: data},
  }
}
export default  Users;

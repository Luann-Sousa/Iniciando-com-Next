import React, {useEffect, useState } from "react";
import Link from 'next/link';
import axios from 'axios';


function Users({users}) {
  
  return (
    <div>
      {users.map((user )=> (
        <div key={user.id}>
            <Link href="/profile/[id]" as={`/profile/${user.id}`}><a>{user.name}</a></Link>
        </div>
      ))}
    </div>
  )
};
export async function getStaticProps(ctx){

    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data = await response.data;
    console.log(data)
  return {
    props: {users: data},
  }
}
export default  Users;

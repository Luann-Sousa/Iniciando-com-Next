import React, {useEffect, useState } from "react";
import { useRouter } from 'next/router';

import axios from 'axios';


function Profille ({user = {}}) {
    const router = useRouter();
    if(router.isFallback){
        return <h1>Carregando ...</h1>
    }

  return (
    <div>
        <p>{user.id}</p>
        <p>{user.name}</p>
        <p>{user.username}</p>
    
    </div>
  )
};

export async function getStaticProps(context){
    const response = await axios.get("https://jsonplaceholder.typicode.com/users",
    {params: {id: context.params.id}})
    const user = await response.data[0];
    await new Promise( (response)=> setTimeout(response, 4000))
    //console.log(data)
    return{
        props: { user },
    }
}

export async function getStaticPaths(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    const users = await response.data.slice(0,5);
    const paths = users.map( (user)=>{
        return { params:{id: String(user.id)} }
    })
    
    return{
        paths: paths,
        fallback: true,
        //quando ta false nosso fallbeck se eu manda na url params 3 ele nao acharar essa pagina 404
        //quando ta true nosso fallbeck ele vai no nosso servidor e retonar se caso exitir mais não de forma statica
        //ira ter que fazer um buscar no servidor.
    }
}

export default Profille;

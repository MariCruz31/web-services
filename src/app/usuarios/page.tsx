"use client"

import { api } from '@/services/api'
import { useEffect, useState } from 'react';

interface User{
    id: string;
    nome: string;
    idade: string;
    profissao: string;
}  

export default function Usuarios() {
    const [users, setUsers] = useState<User[]>([]); 
    const getUsers = async () => {
        try {
          const response = await api.get('/users');
          setUsers(response.data);
        } catch (error) {
          return error;
        }
      };
    useEffect(() =>{
        getUsers()
    },[])
   async function handleDelete(userId:string) {
        try {
            await api.delete(`/users/${userId}`);
      
            setUsers(users.filter((item) => item.id !== userId));
          } catch (error) {
            console.log('Error:', error);
          }
    }

    return(
        <ul className=' p-4 text-lg pt-24 flex flex-col gap-4 bg-slate-300 h-screen '>
            
                     
      
        {users.map((user:User) =>(
          <li key={user.id} className='flex gap-16 items-center'>
           <span>Nome: {user.nome}</span>
           <span>Idade: {user.idade}</span>
           <span>Profissão: {user.profissao}</span> 
           <button className='bg-zinc-500 px-4 py-2 rounded hover:bg-zinc-700' onClick={()=> handleDelete(user.id)}>Delete</button>       
                       
          </li>
        ))}
      </ul>

    )
}

import { Form } from '@/app/form'
import { api } from '@/services/api'

interface User{
  id: string;
  nome: string;
  idade: string;
  profissao: string;
}

export default async function Home() {
  const reponse = await api.get("/users")
  return (
    <main className="h-screen w-full flex justify-center items-center gap-6">
      <Form />
      <ul className='bg-slate-400 p-4 text-white text-lg '>
        {reponse.data.map((user:User) =>(
          <li key={user.id} className='flex gap-2'>
           <span>{user.nome}</span>
           <span>{user.idade}</span>
           <span>{user.profissao}</span>        
                       
          </li>
        ))}
      </ul>
    </main>
  )
}

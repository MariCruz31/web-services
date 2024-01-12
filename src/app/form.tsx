"use client"
import { api } from "@/services/api"
import { randomUUID } from "crypto"
import { FormEvent, useState } from "react"

export function Form(){
   const [nome, setNome]= useState("")
   const [idade, setIdade]= useState("")
   const [profissao, setProfissao]= useState("")

   function onSubmit(e:FormEvent){
    e.preventDefault()
    const data = {
        id: crypto.randomUUID() ,
         nome ,
         idade,
         profissao,
    }
    api.post("/users", data)
   }

    return(
        <form onSubmit={onSubmit} className="flex flex-col bg-slate-500 w-96 p-4 gap-2">
            <h1 className="text-center text-white text-xl">Cadastro Rápido</h1>
            <input className="w-full p-2 border rounded" type="text" placeholder="Digite seu nome" value={nome} onChange={(e)=> setNome (e.target.value)} />
            <input className="w-full p-2 border rounded" type="text" placeholder="Digite sua idade" value={idade} onChange={(e)=> setIdade (e.target.value)} />
            <input className="w-full p-2 border rounded" type="text" placeholder="Digite sua profissão" value={profissao} onChange={(e)=> setProfissao (e.target.value)} />
            <button className="w-full p-2 bg-slate-800 rounded text-white">Enviar</button>
        </form>
    )
}
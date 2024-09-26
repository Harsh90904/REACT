import { useState } from "react"
export default function Register(){
    const [userName , setUsername ]= useState('');
    const [password , setPassword ]= useState('');
    return (
        <div class="bg-blue-50 h-screen flex items-center">
            <form className="w-64 mx-auto ">
                <input value={userName} onChange={ev => setUsername(ev.target.value)} type="text" placeholder="UserName" className="block w-full rounded-sm p-2 mb-2 border"/>
                <input value={password} onChange={ev => setPassword(ev.target.value)} type="password" placeholder="password" className="block w-full rounded-sm p-2 mb-2 border" />
                <button className="bg-blue-500 text-white w-64 block text-center rounded-sm p-2">Register</button>
            </form>
        </div>
    )
}
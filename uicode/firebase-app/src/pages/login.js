"use client"
import React, {useState} from 'react'
import "../app/globals.css"
import { redirect } from 'next/dist/server/api-utils'
// import {CheckUser} from '../components/CheckUser';

const login = () => {
    function useLogin() {
        // const [name,setName]=useState("")
        const [email,setEmail] = useState("")
        const [password,setPassword] = useState("")
      }
    

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const emailId = email
        const userPassword = password
        setEmail("")
        setPassword("")

        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
          })
       
          if (response.ok) {
            router.push('/profile')
          } else {
            // Handle errors
          }

  
        // redirect("/")
        // alert(email)
        

    }
    const handleLogin=async(e)=>{
        CheckUser();

    }

    const handleSignup=async (e)=>{
        e.preventDefault();
    }

   
    return (
        <>
            <div className=" bg-white dark:bg-slate-700 rounded-3xl shadow relative mt-20 p-6 justify-center w-1/2 mx-auto my-auto">

                <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" onSubmit={handleSubmit} action="/">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Login to our platform</h3>
                    {/* <div>
                        <label  className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your name</label>
                        <input onChange={e=>setName(e.target.value)} type="name" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="John Doe" required="" />
                    </div> */}
                    <div>
                        <label  className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
                        <input onChange={e=>setEmail(e.target.value)} type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />
                    </div>
                    <div>
                        <label for="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
                        <input onChange={e=> setPassword(e.target.value)} type="password" name="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                    </div>

              
                    <button type="submit" className="hover:scale-110  dark:text-slate-700 bg-black w-full  dark:bg-white  text-base font-medium px-4 py-2 rounded-md mt-12" onClick={handleLogin}>
                        Login to your account
                    </button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="" className="text-blue-700 hover:underline dark:text-blue-500" onClick={handleSignup}>Create account</a>
                    </div>
                </form>
            </div>
        </>
    )
}

export default login
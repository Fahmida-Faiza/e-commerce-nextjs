// "use client"

// // import { redirect } from 'next/dist/server/api-utils';s
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import {signIn} from "next-auth/react"
// // import SocialSignin from '@/components/SocialSignin';



// const page = () => {
//     // login
//     const handleLogin = async (event) => {
//         event.preventDefault();
//        const email= event.target.email.value;
//         const  password=  event.target.password.value;
//         const resp = await signIn('credentials' ,{
//             email, 
//             password,
//              redirect: false
//         })
//         console.log(resp)
        
       
//     }
    
//     return (
//         <div className='container mx-auto px-24 bg-slate-100 text-black'>
//             <div className='grid grid-cols-2 gap-12'>
//                 <div>
//                     <Image src="/assets/mens-casual.png" height="400" width="540" alt="login" />
//                 </div>
//                 <div className='border-2 p-12 '>
//                     <form onSubmit={handleLogin} action="">
//                         <h1 className='text-3xl text-green-400'>Login page</h1>
//                         <label htmlFor="email">Email</label><br></br>
//                         <input type="text" name="email" placeholder="your email" className="mt-3 input input-bordered w-full max-w-xs" />
//                         <br></br>
//                         <label htmlFor="password">password</label><br></br>
//                         <input type="text"
//                          name="password"
//                           placeholder="your password" 
//                           className="mt-3 input input-bordered w-full max-w-xs" />
//                         <br />
                        
//                         <button type="submit" className='mt-4 btn btn-primary'>SignIn</button>
//                     {/* google login r kaj */}
//                     {/* <div  className='my-12 text-center'>
//                         <h6>or Sign in with</h6>
//                         <SocialSignin/>
//                     </div> */}

//                     {/*  */}
//                     </form>

//                     <h3 className='text-xl'>not have an account? <Link className='text-red-400 text-2xl ' href={'/signup'}>Signup</Link></h3>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default page;









"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";

const Page = () => {
  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await signIn("credentials", { email, password, redirect: false });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">
        <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-100 p-6">
          <Image
            src="/assets/mens-casual.png"
            height={400}
            width={500}
            alt="Login Illustration"
            className="rounded-xl object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome Back 👋</h1>
          <p className="text-gray-600 mb-8">Please sign in to continue</p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" placeholder="your@email.com"
                className="input input-bordered w-full mt-2 bg-white text-black rounded-xl focus:ring-2 focus:ring-pink-400" required />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" name="password" placeholder="Your password"
                className="input input-bordered w-full mt-2 bg-white text-black rounded-xl focus:ring-2 focus:ring-pink-400" required />
            </div>

            <button type="submit" className="btn w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-xl transition-all duration-300">
              Sign In
            </button>
          </form>

          <p className="text-center mt-6 text-gray-600">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-pink-500 font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;

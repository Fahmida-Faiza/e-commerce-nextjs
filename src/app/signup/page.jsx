// "use client"


// // import SocialSignin from '@/components/SocialSignin';
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// const SignUpPage = () => {
//     // signup
//     const handleSignUp = async (event) => {
//         event.preventDefault();
//         const newUser = {
//             name: event.target.name.value,
//             email: event.target.email.value,
//             password: event.target.password.value
//         }
//         console.log(newUser);




         
//         // api request korbo
//         const resp = await fetch("https://e-commerce-nextjs-three-kohl.vercel.app/signup/api", {
//             method: "POST",
//             body: JSON.stringify(newUser),
//             headers: {
//                 "content-type": "application/json"
//             }

//         })
//         console.log(resp)


//         // reset korey likha gula form er
//         if (resp.status === 200) {
//             event.target.reset()
//         }

//     }
//     // 
//     return (
//         <div>
//             <div className='container mx-auto px-24 bg-slate-100 text-black'>
//                 <div className='grid grid-cols-2 gap-12'>
//                     <div>
//                         <Image src="/assets/mens-casual.png" height="400" width="540" alt="login" />
//                     </div>
//                     <h1 className='text-3xl text-red-400'>Signup page</h1>
//                     <div className='border-2 p-12 '>
//                         <form onSubmit={handleSignUp} action="">
//                             <label htmlFor="name">Name</label><br></br>
//                             <input type="text" name="name" placeholder="your name" className="mt-3 input input-bordered w-full max-w-xs" />
//                             <br></br>
//                             <label htmlFor="email">Email</label><br></br>
//                             <input type="text" name="email" placeholder="your email" className="mt-3 input input-bordered w-full max-w-xs" />
//                             <br></br>
//                             <label htmlFor="password">password</label><br></br>
//                             <input type="text"
//                                 name="password"
//                                 placeholder="your password"
//                                 className="mt-3 input input-bordered w-full max-w-xs" />
//                             <br />

//                             <button className='mt-4 btn btn-primary'>SignIn</button>

//                         </form>
//                             {/* <div className='text-center'>
//                                 <h6>or Sign in with</h6>
//                                 <SocialSignin />
//                             </div> */}

//                         <h3 className=''>Already have an account <Link className='text-red-400 text-xl' href={'/login'}>Login</Link></h3>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignUpPage;



"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  const handleSignUp = async (event) => {
    event.preventDefault();
    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    const resp = await fetch(
      "https://e-commerce-nextjs-three-kohl.vercel.app/signup/api",
      {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: { "content-type": "application/json" },
      }
    );

    if (resp.status === 200) event.target.reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 px-4">
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">
        <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-100 p-6">
          <Image
            src="/assets/mens-casual.png"
            height={400}
            width={500}
            alt="Sign Up Illustration"
            className="rounded-xl object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Create Account 🚀</h1>
          <p className="text-gray-600 mb-8">Join us and explore amazing products</p>

          <form onSubmit={handleSignUp} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" name="name" placeholder="Your name"
                className="input input-bordered w-full mt-2 bg-white text-black rounded-xl focus:ring-2 focus:ring-indigo-400" required />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" placeholder="your@email.com"
                className="input input-bordered w-full mt-2 bg-white text-black rounded-xl focus:ring-2 focus:ring-indigo-400" required />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" name="password" placeholder="Create a password"
                className="input input-bordered w-full mt-2 bg-white text-black rounded-xl focus:ring-2 focus:ring-indigo-400" required />
            </div>

            <button type="submit" className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition-all duration-300">
              Sign Up
            </button>
          </form>

          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-500 font-semibold hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

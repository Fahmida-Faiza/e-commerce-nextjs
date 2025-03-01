
"use client"

import Link from 'next/link';
import React, { useEffect } from 'react';
// animation
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { signOut, useSession } from 'next-auth/react';

import { BsCartCheckFill } from "react-icons/bs";





const Navbar = () => {



    const session = useSession()
    







    useEffect( ()=>{
        AOS.init();
    }
    ,[])
// /////////////////////////

    return (
        <div>
            <div  className="navbar bg-white text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">


                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {/* ............................................... */}
                        
                            {
                                navItems.map((item) => (
                                    <li key={item.path}><Link href={item.path} >{item.title}</Link></li>
                                ))
                            }
                        
                       
                        {/* ............................................... */}
                    </ul>
                </div>
                <div className="navbar-end  space-x-4">
                <div>
                                  <Link href={`/my-bookings`}>   <button className='btn btn-primary'> <BsCartCheckFill /></button></Link>

                                      </div>
                    <div>

                    

                        {/* <Link href ="/login"><button className='btn btn-accent'>Login</button></Link>       */}


                          {/* logout r kaj */}
                         {!session.data ?
                            <h1> <Link className='btn btn-accent' href={'/login'}>Login</Link></h1>
                            :
                            <button className=" btn btn-warning" onClick={() => signOut()}>LogOut</button>
                        }


                        
                                      </div>


                                      
                </div>
            </div>
        </div>
    );
};


const navItems = [

    {
        title: "Home",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    // {
    //     title: "Services",
    //     path: "/services"
    // },
    // {
    //     title: "MyBookings",
    //     path: "/my-bookings"
    // },
    {
        title: "Blog",
        path: "/blogs"
    },
    {
        title: "Contacts",
        path: "/contacts"
    },
]

export default Navbar;




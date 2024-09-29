import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Homepage = () => {
    return (
        <div>
            <div className="carousel w-full h-[20rem] lg:h-[38rem]">
                <div id="slide1" className="carousel-item relative w-full">
                    <Image src="/assets/banner-1.jpg" width="1200" height="1200" className='w-full' alt="Banner 1" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <Image src="/assets/banner-2.jpg" width="1200" height="1200" className='w-full' alt="Banner 2" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <Image src="/assets/banner-1.jpg" width="1200" height="1200" className='w-full' alt="Banner 3" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <Image src="/assets/banner-2.jpg" width="1200" height="1200" className='w-full' alt="Banner 1" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>



            {/*  */}

            <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 bg-white mt-10">
                <div>
                    <div className="card card-compact bg-base-100 w-full lg:w-80 shadow-xl">
                        <figure>
                            <Image
                                src="/assets/men_1.jpg" width="1000" height="1200" className='w-full' alt="Banner 2" />
                        </figure>

                    </div>
                </div>

                <div>
                    <div className="card card-compact bg-base-100 w-full lg:w-80 shadow-xl">
                        <figure>
                            <Image
                                src="/assets/women_1.jpg" width="1200" height="1200" className='w-full' alt="Banner 2" />
                        </figure>

                    </div>
                </div>
                <div>
                    <div className="card card-compact bg-base-100 w-full lg:w-80 shadow-xl">
                        <figure>
                            <Image
                                src="/assets/kids_1.jpg" width="1200" height="1200" className='w-full' alt="Banner 2" />
                        </figure>

                    </div>
                </div>
                <div>
                    <div className="card card-compact bg-base-100 w-full lg:w-80 shadow-xl">
                        <figure>
                            <Image
                                src="/assets/accessories_1.jpg" width="1200" height="1200" className='w-full' alt="Banner 2" />
                        </figure>

                    </div>
                </div>
            </div>

            {/*  */}
            <div
                className="hero   mt-10">

                <Image
                    src="/assets/web-strip-banner.jpg" width="1200" height="1200" className='w-full' alt="Banner 2" />


            </div>


            {/*  2nd navbar*/}

            <div>
                <div className="navbar bg-base-100">
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

                            <li><div className="dropdown dropdown-hover">
                                <div tabIndex={0}>Hover</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-24">
                                    <li>Hello</li>
                                </ul>
                            </div></li>
                            {/* ............................................... */}
                        </ul>
                    </div>
                    <div className="navbar-end"></div>
                </div>
            </div>




            {/*card  */}

            <div className='mx-auto  w-[90%] grid grid-cols-1 lg:grid-cols-4 gap-4 text-black'>
                <div className="card hover:shadow-xl">
                    {/*..............................................  */}
                    <div className="group relative">
                        {/* Image 1 - Shown by default */}
                      
                        <figure>
                            <Image
                                src="/assets/shoes-1.jpg" width="1200" height="1200" className="w-full h-full object-cover" alt="Banner 2" />
                        </figure>

                        <figure>
                            <Image
                                src="/assets/shoe_2.jpg" width="1200" height="1200" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300" alt="Banner 2" />
                        </figure>

                       
                    </div>
                   
                    <div className="card-body text-center">
                        <h2 className="card-title justify-center">NORTH STAR</h2>
                        <p>North Star ROYAL Casual Lace-Up Sneaker for Men</p>
                        <div className=''>
                            <span className=''>Tk <del>3299</del> </span>
                            <span className='text-red-500'>Tk 2960</span>
                        </div>

                        <div className="card-actions justify-end">
                            <button className="btn  text-white w-full  hover:btn-error  hover:text-white ">Shop Now</button>
                        </div>
                    </div>
                </div>

                {/* 2nd card */}
                <div className="card   hover:shadow-xl ">
                    {/*..............................................  */}
                    <div className="group relative">
                        {/* Image 1 - Shown by default */}

                        <figure>
                            <Image
                                src="/assets/shoes2.jpg" width="1200" height="1200" className="w-full h-full object-cover" alt="Banner 2" />
                        </figure>

                        <figure>
                            <Image
                                src="/assets/shoes2.png" width="1200" height="1200" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300" alt="Banner 2" />
                        </figure>


                    </div>
                    <div className="card-body text-center">
                        <h2 className="card-title justify-center">NORTH STAR</h2>
                        <p>North Star ROYAL Casual Lace-Up Sneaker for Men</p>
                        <div className=''>
                            <span className=''>Tk <del>3299</del> </span>
                            <span className='text-red-500'>Tk 2960</span>
                        </div>

                        <div className="card-actions justify-end">
                            <button className="btn  text-white w-full  hover:btn-error  hover:text-white ">Shop Now</button>
                        </div>
                    </div>
                </div>

                {/* 3rd card */}
                <div className="card hover:shadow-xl">
                    <div className="group relative">
                        {/* Image 1 - Shown by default */}

                        <figure>
                            <Image
                                src="/assets/shoes-1.jpg" width="1200" height="1200" className="w-full h-full object-cover" alt="Banner 2" />
                        </figure>

                        <figure>
                            <Image
                                src="/assets/shoe_2.jpg" width="1200" height="1200" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300" alt="Banner 2" />
                        </figure>


                    </div>

                    <div className="card-body text-center">
                        <h2 className="card-title justify-center">NORTH STAR</h2>
                        <p>North Star ROYAL Casual Lace-Up Sneaker for Men</p>

                        
                       
                        <div className=''>
                            <span className=''>Tk <del>3299</del> </span>
                            <span className='text-red-500'>Tk 2960</span>
                        </div> 
                       
                     
                        <div className="card-actions justify-end">
                            <button className="btn text-white w-full  hover:btn-error  hover:text-white ">Shop Now</button>
                        </div>
                    </div>
                </div>     <div className="card hover:shadow-xl">
                    <div className="group relative">
                        {/* Image 1 - Shown by default */}

                        <figure>
                            <Image
                                src="/assets/shoes2.jpg" width="1200" height="1200" className="w-full h-full object-cover" alt="Banner 2" />
                        </figure>

                        <figure>
                            <Image
                                src="/assets/shoes2.png" width="1200" height="1200" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300" alt="Banner 2" />
                        </figure>


                    </div>
                    <div className="card-body text-center">
                        <h2 className="card-title justify-center">NORTH STAR</h2>
                        <p>North Star ROYAL Casual Lace-Up Sneaker for Men</p>
                        <div className=''>
                            <span className=''>Tk <del>3299</del> </span>
                            <span className='text-red-500'>Tk 2960</span>
                        </div>


                        <div className="card-actions justify-end">
                            <button className="btn  text-white w-full  hover:btn-error hover:text-white">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>



            {/* //////////////////// */}

        </div>
    );
};





const navItems = [

    // {
    //     title: "Home",
    //     path: "/"
    // },
    {
        title: "Casuals",
        path: "/about"
    },
    {
        title: "Ladies Flat",
        path: "/services"
    },
    {
        title: "Snekers",
        path: "/my-bookings"
    },
    {
        title: "Sandels",
        path: "/blog"
    },
    {
        title: "Acceraries",
        path: "/contacts"
    },
]

export default Homepage;

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Services from './Services';

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

            <div   className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 bg-white mt-10    "  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
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

                            {/* ............................................... */}
                        </ul>
                    </div>
                    <div className="navbar-end"></div>
                </div>
            </div>




            {/* servicescard  */}

           {/* <Services/> */}
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-black w-[90%] mx-auto mt-20'>
           <div className="card bg-base-100 w-96 shadow-xl" >
                        <div className="group relative">
                            {/* Image 1 - Shown by default */}

                            <figure>
                                <Image
                                    src="/assets/men_1.jpg" width="1200" height="1200" className="w-full h-full object-cover" alt="Banner 2" />
                            </figure>

                          


                        </div>
                        <div className="card-body bg-white">
                            <h2 className="card-title justify-center">Mens Snikkers</h2>
                            <p>North Star ROYAL Casual Lace-Up Sneaker for Men</p>
                            {/* <div className=''>
                                <span className='text-gray-400'>Tk <del>3299</del> </span>
                                <span className='text-red-500'>Tk 2000</span>
                            </div> */}

                            <div className="card-actions justify-center">
                                <Link href={`/mens`}>
                                    <button className="btn  text-white w-full  hover:btn-error  hover:text-white ">View All</button>
                                </Link>
                            </div>
                        </div>
                    </div>






                    <div className="card bg-base-100 w-96 shadow-xl" >
                        <div className="group relative">
                            {/* Image 1 - Shown by default */}

                            <figure>
                                <Image
                                    src="/assets/women_1.jpg" width="1200" height="1200" className="w-full h-full object-cover" alt="Banner 2" />
                            </figure>

                          


                        </div>
                        <div className="card-body bg-white">
                            <h2 className="card-title justify-center">Womens Snikers</h2>
                            <p>North Star ROYAL Casual Lace-Up Sneaker for women</p>
                            {/* <div className=''>
                                <span className='text-gray-400'>Tk <del>3299</del> </span>
                                <span className='text-red-500'>Tk 2000</span>
                            </div> */}

                            <div className="card-actions justify-center">
                                <Link href={`/women`}>
                                    <button className="btn  text-white w-full  hover:btn-error  hover:text-white ">View All</button>
                                </Link>
                            </div>
                        </div>
                    </div>











                    <div className="card bg-base-100 w-96 shadow-xl" >
                        <div className="group relative">
                            {/* Image 1 - Shown by default */}

                            <figure>
                                <Image
                                    src="/assets/kids_1.jpg" width="1200" height="1200" className="w-full h-full object-cover" alt="Banner 2" />
                            </figure>

                          


                        </div>
                        <div className="card-body bg-white">
                            <h2 className="card-title justify-center">Kids Snikers</h2>
                            <p>North Star ROYAL Casual Lace-Up Sneaker for kids</p>
                            {/* <div className=''>
                                <span className='text-gray-400'>Tk <del>3299</del> </span>
                                <span className='text-red-500'>Tk 2000</span>
                            </div> */}

                            <div className="card-actions justify-center">
                                <Link href={`/kids`}>
                                    <button className="btn  text-white w-full  hover:btn-error  hover:text-white ">View All</button>
                                </Link>
                            </div>
                        </div>
                    </div>
           </div>



            {/* //////////////////// */}
            {/* card2nd page */}

            <div className='mx-auto text-gray-500 w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20'>
                <div className="card card-compact  group relative  overflow-hidden  shadow-xl">
                    <figure>
                        <Image
                            src="/assets/mens-casual.png" width="1200" height="1200" className='w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110' alt="Banner 2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">North Star ROYAL Casual</h2>
                        <p>North Star ROYAL Casual  Casual Lace-Up Sneaker for Men </p>
                        <div className="card-actions ">
                            <Link href={`/booking`}>
                                <button className="btn  text-white w-full  hover:btn-error  hover:text-white ">Shop Now</button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* 2nd cols */}
                <div className="card group relative  overflow-hidden  shadow-xl">
                    <figure>
                        <Image
                            src="/assets/mens-casual.png" width="1200" height="1200" className='  w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110' alt="Banner 2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title ">Mens Casuals</h2>
                        <p>North Star ROYAL Casual  Casual Lace-Up Sneaker for Men</p>
                        <div className="card-actions ">
                            <Link href={`/booking`}>
                                <button className="btn  text-white w-full  hover:btn-error  hover:text-white ">Shop Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            {/* card 3 tar  */}
            <div className='mx-auto w-[80%] my-10 text-black text-3xl'>
                <h1 >PICK YOUR FAVOURITES</h1>
            </div>

            <div class="my-10 mx-auto  w-[80%]  justify-center grid grid-cols-1 lg:grid-cols-3 gap-8">




                <div >

                    <div className="card card-compact bg-base-100 w-80  md:w-full lg:w-96 shadow-xl">
                        <figure className='overflow-hidden'>
                            <Image width={400} height={400} className="transition-transform duration-300 transform hover:scale-110"
                                src="/assets/women.png"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body items-center text-center  bg-white text-gray-500">
                            <h2 className="card-title">Ladies casual</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fugiat sint vitae iure temporibus eum! Excepturi explicabo consequuntur quibusdam nesciunt?</p>
                            <div className="card-actions justify-end">
                            <Link href={`/booking`}><button className="btn text-white btn-error">Buy Now</button> </Link>
                              
                            </div>
                        </div>
                    </div>
                </div>
                <div class="">

                    <div className="card card-compact bg-base-100 w-80 md:w-full lg:w-96 shadow-xl">
                        <figure className='overflow-hidden'>
                            <Image width={400} height={400} className="transition-transform duration-300 transform hover:scale-110"
                                src="/assets/mens.png"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body items-center text-center  bg-white text-gray-500">
                            <h2 className="card-title">Mens Casuals</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus error explicabo soluta consequatur reprehenderit fuga nesciunt earum quam ut. Iste!</p>
                            <div className="card-actions justify-end">
                            <Link href={`/booking`}><button className="btn text-white btn-error">Buy Now</button> </Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="">
                    <div className="card card-compact bg-base-100 w-80 md:w-full lg:w-96 shadow-xl">
                        <figure className='overflow-hidden'>
                            <Image width={400} height={400} className="transition-transform duration-300 transform hover:scale-110"
                                src="/assets/bags.png"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body items-center text-center bg-white text-gray-500">
                            <h2 className="card-title">Ladies Bags</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum unde tempore placeat sapiente dolorem earum, dolorum minima facilis nisi consectetur?</p>
                            <div className="card-actions justify-end">
                            <Link href={`/booking`}><button className="btn text-white btn-error">Buy Now</button> </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>




















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

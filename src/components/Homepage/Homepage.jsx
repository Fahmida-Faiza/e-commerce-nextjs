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

            <div className='mx-auto  w-[90%] grid grid-cols-1 lg:grid-cols-4 gap-4 text-black' >
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
                            <span className='text-gray-400'>Tk <del>3299</del> </span>
                            <span className='text-red-500'>Tk 2960</span>
                        </div>

                        <div className="card-actions justify-center">
                            <Link href={`/booking`}>
                                <button className="btn  text-white w-full  hover:btn-error  hover:text-white ">Shop Now</button>
                            </Link>
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
                            <span className='text-gray-400'>Tk <del>3299</del> </span>
                            <span className='text-red-500'>Tk 2960</span>
                        </div>

                        <div className="card-actions justify-center">
                            <Link href={`/booking`}>
                                <button className="btn  text-white w-full  hover:btn-error  hover:text-white ">Shop Now</button>
                            </Link>
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
                            <span className='text-gray-400'>Tk <del>3299</del> </span>
                            <span className='text-red-500'>Tk 2960</span>
                        </div>


                        <div className="card-actions justify-center">
                            <Link href={`/booking`}>
                                <button className="btn  text-white w-full  hover:btn-error  hover:text-white ">Shop Now</button>
                            </Link>
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
                            <span className='text-gray-400'>Tk <del>3299</del> </span>
                            <span className='text-red-500'>Tk 2960</span>
                        </div>


                        <div className="card-actions justify-center">
                            <Link href={`/booking`}>
                                <button className="btn  text-white w-full  hover:btn-error  hover:text-white ">Shop Now</button>
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
                                <button className="btn text-white btn-error">Buy Now</button>
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
                                <button className="btn text-white btn-error">Buy Now</button>
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
                                <button className="btn text-white btn-error">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>







            {/* footer */}
            <footer className="footer bg-base-200 text-base-content p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
                <aside className="grid-flow-col items-center">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="fill-current">
                        <path
                            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                    </svg>
                    <p>
                        ACME Industries Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
            </footer>














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

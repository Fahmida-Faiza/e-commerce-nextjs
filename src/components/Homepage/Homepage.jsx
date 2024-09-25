import Image from 'next/image';
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

            <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 bg-white">
                <div>
                    <div className="card card-compact bg-base-100 w-full lg:w-80 shadow-xl">
                        <figure>
                            <Image
                                src="/assets/banner-2.jpg" width="1000" height="1200" className='w-full' alt="Banner 2" />
                        </figure>
                       
                    </div>
                </div>
                
                <div>
                    <div className="card card-compact bg-base-100 w-full lg:w-80 shadow-xl">
                        <figure>
                            <Image
                                src="/assets/banner-2.jpg" width="1200" height="1200" className='w-full' alt="Banner 2" />
                        </figure>

                    </div>
                </div>
                <div>
                    <div className="card card-compact bg-base-100 w-full lg:w-80 shadow-xl">
                        <figure>
                            <Image
                                src="/assets/banner-2.jpg" width="1200" height="1200" className='w-full' alt="Banner 2" />
                        </figure>

                    </div>
                </div>
                <div>
                    <div className="card card-compact bg-base-100 w-full lg:w-80 shadow-xl">
                        <figure>
                            <Image
                                src="/assets/banner-2.jpg" width="1200" height="1200" className='w-full' alt="Banner 2" />
                        </figure>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;

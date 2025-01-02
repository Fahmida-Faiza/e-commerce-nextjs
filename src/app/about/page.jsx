import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function About() {
    return (
        <div>
            <div className='mx-auto  w-[80%]  '>
                <div className='text-black '>
                    <h1 className='text-3xl font-bold text-center my-8'>OUR STORY</h1>
                    <h2 className='text-red-400 my-2'>About Bata Bangladesh</h2>

                    <p>The Bata Shoe Organization was founded in 1894 by Czech businessman Tomas Bata in the city of Zlin, what was then Czechoslovakia. Coming from a family of shoemakers with a long heritage of eight generations and over three hundred years, Tomas Bata capitalized on knowledge, expertise and skills to propel his newly founded company forward. The introduction of factory automation, long distance retailing and modernized shoe making ensured the profitability of the company from the very beginning. It is now the world’s largest manufacturer and marketer of footwear operating across the globe.

                        Since its founding, Bata has been at the forefront of innovation; not only in the production and design of new styles, but in the creation of business models that permit a quick response to the ever changing wants and needs of our customers. As a result, Bata enjoys a long history as a leading manufacturer and retailer of quality footwear, and proudly serves some one million customers each day.

                        Today the Bata Shoe Organization is a sprawling geo-centric company encompassing operations in more than 70 countries around the world. It serves over 1 million customers per day, employs more than 30,000 people, operates more than 5,000 international retail outlets, manages retail presence in over 70 countries and runs 27 production facilities across 20 countries.

                        Bata’s reach is worldwide; its presence is local. Our novel international manufacturing structure allows Bata facilities around the globe to respond to the unique needs and wants of local customers. As a result, Bata is honored to be a local company in every country it serves. Bata continues to be guided by the same core principle it has followed for over one hundred years: to know its customers and to create the best possible products to meet their needs.

                        In Bangladesh, Bata started its operation in 1962. Currently Bata Shoe Company (Bangladesh) Limited operates two manufacturing facilities – one in Tongi and the other in Dhamrai. With a production capacity of 160,000 pairs of shoes daily. Annual shoe sales currently stands about 30 million pairs.</p>
                </div>

                <div class="      grid  grid-cols-1 lg:grid-cols-3  my-20  gap-2" data-aos="fade-up"
                    data-aos-duration="3000">
                    <div>
                        <div className="card card-compact text-black w-80 lg:w-96 md:w-80  shadow-xl border-x-8 bg-white">
                            <figure>
                                <Image
                                    src="/assets/mens.png" width="700" height="1200"
                                    className="" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Aubrey Bravo</h2>
                                <p>Student</p>
                                <div className="card-actions justify-end">
                                <Link href={`/contacts`}><button className="btn btn-primary">Contact Now</button> </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="card card-compact bg-base-100 w-80  lg:w-96 md:w-80 shadow-xl border-x-8">
                            <figure>
                                <Image
                                    src="/assets/women.png" width="700" height="1200"
                                    className="" />
                            </figure>
                            <div className="card-body items-center text-center bg-red-500">
                                <h2 className="card-title">Bryony Storey</h2>
                                <p>Designer
                                </p>
                                <div className="card-actions justify-end">
                                <Link href={`/contacts`}><button className="btn btn-error text-white">Contact Now</button> </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="card card-compact text-black w-80 lg:w-96 md:w-80   shadow-xl border-x-8 bg-white">
                            <figure>
                                <Image
                                    src="/assets/mens.png" width="700" height="1200"
                                    className="" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Annabelle Perry</h2>
                                <p>Architect
                                </p>
                                <div className="card-actions justify-end">
                                   
                                    <Link href={`/contacts`}><button className="btn btn-primary">Contact Now</button> </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>









            </div>






            {/* 2nd card */}


            <div className="hero bg-slate-100  text-black my-10">
                <div className="hero-content flex-col lg:flex-row">
                    <Image
                        src="/assets/mens-casual.png" width="1200" height="1200"

                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='lg:pl-40'>
                        <h1 className="text-5xl font-bold">Your Business Potential with Our Proven Strategies</h1>
                        <p className="py-6">
                            First your free consultant for 1 hour. We are waiting for your invitation. Give us an opportunity to work with you and give a boost to your business.


                        </p>
                        <button className="btn btn-error">Join With Us</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default About
"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

const Page = () => {
    const session = useSession();
    const [bookings, setBooking] = useState([]);

    const loadData = useCallback(async () => {
        if (!session?.data?.user?.email) return; // Ensure session data exists
        const resp = await fetch(`https://e-commerce-nextjs-three-kohl.vercel.app/my-bookings/api/${session.data.user.email}`);
        const data = await resp.json();
        setBooking(data?.myBookings);
    }, [session?.data?.user?.email]); // Only re-create if session email changes

    const handleDelete = async (id) => {
        const deleted = await fetch(`https://e-commerce-nextjs-three-kohl.vercel.app/my-bookings/api/delete/${id}`, {
            method: "DELETE",
        });
        const resp = await deleted.json();
        console.log(resp);
        if (resp?.response?.deletedCount > 0) {
            loadData();
        }
    };

    useEffect(() => {
        loadData();
    }, [loadData]); // Now loadData is stable, and this fixes the warning

    return (
        <div className="flex justify-between">
            <div className="grid grid-cols-2 gap-4">
                {bookings?.map(({ _id, name, price, size, image }) => (
                    <div className="relative" key={_id}>
                        <div className="hero lg:w-[52] shadow-xl relative">
                            <div className="hero-content">
                                <figure className="overflow-hidden">
                                    <Image
                                        width={400}
                                        height={400}
                                        className="transition-transform duration-300 transform hover:scale-110"
                                        src={image}
                                        alt="Shoes"
                                    />
                                </figure>
                                <div>
                                    <p className="py-6 text-black">Brand: {name}</p>
                                    <h2 className="text-black">Price: {price}</h2>
                                    <h3 className="text-black">Size: {size}</h3>
                                    <div>
                                        <button onClick={() => handleDelete(_id)} className="btn btn-error">X</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="card text-blue-600 w-52 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">SUBTOTAL</h2>
                    <p>Price: </p>
                </div>
            </div>
        </div>
    );
};

export default Page;

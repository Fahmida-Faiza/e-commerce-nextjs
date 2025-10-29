"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

const Page = () => {
  const session = useSession();
  const [bookings, setBooking] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  const loadData = useCallback(async () => {
    if (!session?.data?.user?.email) return;
    const resp = await fetch(`https://e-commerce-nextjs-three-kohl.vercel.app/my-bookings/api/${session.data.user.email}`);
    const data = await resp.json();
    setBooking(data?.myBookings || []);

    const total = (data?.myBookings || []).reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
    setSubtotal(total);
  }, [session?.data?.user?.email]);

  const handleDelete = async (id) => {
    const deleted = await fetch(`https://e-commerce-nextjs-three-kohl.vercel.app/my-bookings/api/delete/${id}`, {
      method: "DELETE",
    });
    const resp = await deleted.json();
    if (resp?.response?.deletedCount > 0) {
      loadData();
    }
  };

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* === Left: Products Grid === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 flex-1">
          {bookings?.map(({ _id, name, price, size, image, quantity }) => (
            <div
              key={_id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-4 relative"
            >
              <div className="overflow-hidden rounded-xl mb-4">
                <Image
                  width={400}
                  height={400}
                  className="rounded-xl transition-transform duration-500 group-hover:scale-110 object-cover w-full h-[250px]"
                  src={image}
                  alt={name}
                />
              </div>
              <div className="space-y-1 text-gray-800">
                <p className="font-semibold text-lg">{name}</p>
                <p className="text-gray-600">Size: {size}</p>
                <p className="text-gray-600">Qty: {quantity || 1}</p>
                <p className="font-semibold text-blue-700">
                  Price: Tk {price * (quantity || 1)}
                </p>
              </div>
              <button
                onClick={() => handleDelete(_id)}
                className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* === Right: Subtotal Section === */}
        <div className="w-full md:w-72 bg-white rounded-2xl shadow-md p-6 h-fit sticky top-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
            Order Summary
          </h2>
          <div className="space-y-2 text-gray-700">
            <p className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium">Tk {subtotal}</span>
            </p>
            <p className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </p>
            <p className="flex justify-between border-b pb-2">
              <span>Tax</span>
              <span>Included</span>
            </p>
            <p className="flex justify-between text-lg font-semibold text-gray-900">
              <span>Total</span>
              <span>Tk {subtotal}</span>
            </p>
          </div>
          <button className="btn btn-info w-full mt-5 text-white bg-blue-600 hover:bg-blue-700 border-none rounded-xl py-3 text-lg transition-all duration-300">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;

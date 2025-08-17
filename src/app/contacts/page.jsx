// // import React from 'react'

// // export default function ContactPage() {
// //   return (
// //     <div>


// //       <div className="hero  min-h-screen">
// //         <div className="hero-content flex-col lg:flex-row-reverse">
// //           <div className="text-center lg:text-left text-black">
// //             <h1 className="text-5xl font-bold ">Contact now!</h1>
// //             <p className="py-6">
// //               Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
// //               quasi. In deleniti eaque aut repudiandae et a id nisi.
// //             </p>
// //           </div>
// //           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
// //             <form className="card-body">
// //               <div className="form-control">
// //                 <label className="label">
// //                   <span className="label-text">Name</span>
// //                 </label>
// //                 <input type="text" placeholder="Name" className="input input-bordered" required />
// //               </div>
// //               <div className="form-control">
// //                 <label className="label">
// //                   <span className="label-text">Email</span>
// //                 </label>
// //                 <input type="email" placeholder="Email" className="input input-bordered" required />
// //               </div>
// //               <div className="form-control">
// //                 <label className="label">
// //                   <span className="label-text">Message</span>
// //                 </label>
// //                 <input
// //                   type="text"
// //                   placeholder="Write your message here"
// //                   className="input input-bordered input-lg w-full" />

// //               </div>
// //               <div className="form-control mt-6">
// //                 <button className="btn btn-primary">Submit</button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }


// import React from "react";

// export default function ContactPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
//       <div className="hero">
//         <div className="hero-content flex-col lg:flex-row-reverse gap-10">
//           <div className="text-center lg:text-left text-white max-w-lg">
//             <h1 className="text-5xl font-extrabold drop-shadow-lg">Contact Us</h1>
//             <p className="py-6 text-lg leading-relaxed opacity-90">
//               Have any questions or just want to say hello? Fill out the form and we’ll get back to you shortly.
//             </p>
//           </div>

//           <div className="card bg-white w-full max-w-md shadow-2xl p-6 rounded-2xl">
//             <form className="card-body space-y-4">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text text-gray-700 font-medium">Name</span>
//                 </label>
//                 <input type="text" placeholder="John Doe" className="input input-bordered rounded-xl bg-white text-black placeholder-gray-500 focus:ring-2 focus:ring-pink-400" required />
//               </div>

//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text text-gray-700 font-medium">Email</span>
//                 </label>
//                 <input type="email" placeholder="example@email.com" className="input input-bordered rounded-xl bg-white text-black placeholder-gray-500 focus:ring-2 focus:ring-pink-400" required />
//               </div>

//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text text-gray-700 font-medium">Message</span>
//                 </label>
//                 <textarea placeholder="Write your message..." className="textarea textarea-bordered rounded-xl bg-white text-black placeholder-gray-500 min-h-[120px] focus:ring-2 focus:ring-pink-400" required></textarea>
//               </div>

//               <div className="form-control mt-6">
//                 <button className="btn bg-pink-500 hover:bg-pink-600 text-white rounded-xl transition-all duration-300">
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl w-full">
        
        {/* Left Text */}
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
            📩 Get in Touch
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Have any questions or want to work with us?  
            Fill out the form and we will get back to you as soon as possible.
          </p>
        </div>

        {/* Right Form */}
        <div className="bg-white w-full max-w-md shadow-2xl rounded-2xl p-8">
          <form className="space-y-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 font-medium">Name</span>
              </label>
              <input type="text" placeholder="John Doe" className="input input-bordered w-full rounded-xl bg-white text-black placeholder-gray-500 focus:ring-2 focus:ring-pink-400" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 font-medium">Email</span>
              </label>
              <input type="email" placeholder="example@email.com" className="input input-bordered w-full rounded-xl bg-white text-black placeholder-gray-500 focus:ring-2 focus:ring-pink-400" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 font-medium">Message</span>
              </label>
              <textarea placeholder="Write your message..." className="textarea textarea-bordered w-full rounded-xl bg-white text-black placeholder-gray-500 min-h-[140px] focus:ring-2 focus:ring-pink-400" required></textarea>
            </div>

            <button className="btn w-full bg-pink-500 hover:bg-pink-600 text-white rounded-xl font-semibold transition-all duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

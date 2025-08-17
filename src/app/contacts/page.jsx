import React from 'react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          
          {/* Text Section */}
          <div className="text-center lg:text-left text-white max-w-lg">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">Contact Us</h1>
            <p className="py-6 text-lg leading-relaxed opacity-90">
              Have any questions or just want to say hello?  
              Fill out the form and we’ll get back to you shortly.
            </p>
          </div>

          {/* Form Section */}
          <div className="card glass w-full max-w-md shadow-2xl p-6">
            <form className="card-body space-y-4">
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="input input-bordered rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                  required
                />
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="input input-bordered rounded-xl   focus:outline-none focus:ring-2 focus:ring-pink-400"
                  required
                />
              </div>

              {/* Message */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Message</span>
                </label>
                <textarea
                  placeholder="Write your message here..."
                  className="textarea textarea-bordered rounded-xl min-h-[120px] focus:outline-none focus:ring-2 focus:ring-pink-400"
                  required
                ></textarea>
              </div>

              {/* Submit */}
              <div className="form-control mt-6">
                <button className="btn bg-pink-500 hover:bg-pink-600 text-white rounded-xl transition-all duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

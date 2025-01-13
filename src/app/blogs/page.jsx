import React from 'react'

import Link from 'next/link'
import getAllBlogs from '@/lib/getAllBlogs'

export default async function Blogs() {
  const blogs = await getAllBlogs()
  // console.log(blogs)


  return (
    <div className=''>

      <h1 className='text-center font-bold text-3xl text-black my-10'>All Blogs</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto w-[80%]'>


        {
          blogs.map((blog) => (
            <div key={blog.id}>
              <div className="card text-black md:w-80 lg:w-96 shadow-xl h-[300px]">
                <div className="card-body">
                  <Link href={`/blogs/${blog.id}`}>
                    <h2 className="card-title"> {blog.title}</h2>
                    <div className="card-actions justify-center my-10">
                      <button className="btn btn-primary text-white">Show Details</button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

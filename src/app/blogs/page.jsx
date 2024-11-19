import React from 'react'
import getAllBlogs from '../../../lib/getAllBlogs'
import Link from 'next/link'

export default async function Blogs() {
  const blogs = await getAllBlogs()
  // console.log(blogs)


  return (
    <div className=''>

      <h1>all Blogs</h1>

      <div className='grid grid-cols-3 gap-5 mx-auto w-[80%]'>


        {
          blogs.map((blog) => (
            <div key={blog.id}>
              <div className="card bg-base-100 md:w-80 lg:w-96 shadow-xl">
                <div className="card-body">
                  <Link href={`/blogs/${blog.id}`}>
                    <h2 className="card-title"> {blog.title}</h2>
                    <div className="card-actions justify-center my-10">
                      <button className="btn btn-primary">Show Details</button>
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

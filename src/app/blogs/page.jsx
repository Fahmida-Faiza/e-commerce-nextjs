import React from 'react'
import getAllBlogs from '../../../lib/getAllBlogs'
import Link from 'next/link'

export default async function Blogs() {
const blogs = await getAllBlogs()
// console.log(blogs)


  return (
    <div className='text-black'> 

    <h1>all Blogs</h1>
    <ul className='mt-10'>
        {blogs.map((blog )=> (
            <li key={blog.id}>
        <Link href={`/blogs/${blog.id}`}>
        {blog.title}</
        Link>
        </li>
        ))}
    </ul>

    </div>
  )
}

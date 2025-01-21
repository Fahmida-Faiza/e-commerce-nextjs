import React from 'react'
// import getPost from '../../../../lib/getPost';
import Image from 'next/image';
import getPost from '@/lib/getPost';

export default async function PostPage({ params }) {
  const { id } = params;
  const post = await getPost(id)
  return (
    <div className='mx-auto my-10 '>



      {/* <h2>{post.title}</h2>
      <p>{post.body}</p> */}



      <div className="card text-black  md:w-80 lg:w-full shadow-xl">
        <figure className="px-10 pt-10">
          <Image
            src="/assets/bags.png"
            alt="Shoes"
            width={400} height={400}
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.body}</p>

        </div>
      </div>
    </div>
  )
}

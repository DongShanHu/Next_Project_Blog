import * as React from 'react'
import { InferGetStaticPropsType } from 'next'
import AddPost from './components/AddPost'
import Post from './components/Post'
import { IPost } from './types'
import { useState } from 'react'

const API_URL: string = 'https://jsonplaceholder.typicode.com/posts'

//The type InferGetStaticPropsType, provided by Next.js, allows us to set the type on the method getStaticProps. It will infer the type defined on the props returned by getStaticProps.
export default function IndexPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
 const [postList,setpostList]=useState(posts)

  return (
    <main className='container'>
      <h1>The page of Posts</h1>

    </main>
  )
}

export async function getStaticProps() {

  return {

  }
}
import React from 'react'
import Card from './Card'

const Post = () => {
  return (
    <div className='main'>
     <h1>ALL POSTS</h1>
     <div className="create">
      <form method='post' className='form'>
        <input type="text" placeholder='title' name="title" className='inptitle'/>
        <input type="text" placeholder='description' name="description" className='inpdesc'/>
        <button className='bt'>POST</button>
      </form>
     </div>
     <Card/>
     <Card/>
     <Card/>
    </div>
  )
}

export default Post

import React, { useState } from 'react'
import Card from './Card'
import Getallposts from './getallpost'
import toast from 'react-hot-toast'
import axios from 'axios'

const Post = () => {
  const [userid,setuserid]=useState([]);
  const [title,settitle]=useState([]);
  const [media,setmedia]=useState([]);
  const submitpost=async(e)=>{
    e.preventDefault();
    try {
      const ans = await axios.post(
        "http://localhost:3001/api/tutor-posts",
        { userid,title,media },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (ans.data.success) {
        toast.success(ans.data.message);
        console.log(ans.data.message);
      } else {
        toast.error(ans.data.message);
        console.log(ans.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response);
    }
  }
  return (
    <div className='main postpage'>
     <h1>ALL POSTS</h1>
     <div className="create">
      <form method='post' className='form' onSubmit={submitpost}>
        <input type="text" placeholder='userid' name="userid"  value={userid} className='inptitle' onChange={(e) => {
                  setuserid(e.target.value);
                }}/>
        <input type="text" placeholder='title' name="title" value={title} onChange={(e) => {
                  settitle(e.target.value);
                }} className='inptitle'/>
        <input type="text" placeholder='media' name="media" value={media} className='inptitle' onChange={(e) => {
                  setmedia(e.target.value);
                }}/>
        {/* <input type="text" placeholder='description' name="description" className='inpdesc'/> */}
        <button>SUBMIT</button>
      </form>
     </div>
     <div className="getposts">
      <Getallposts/>
     </div>
    </div>
  )
}

export default Post

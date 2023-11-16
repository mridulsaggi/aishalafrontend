import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Getallposts = () => {
    const [data,setdata]=useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/api/student-posts/getPost`, {
          withCredentials: true,
        }).then((res) => {
          console.log(res.data.posts)
        }).catch((err) => {
          console.log(err.response.data);
        })
    
      }, [])
  return (
    <div>
      <h1>RECENT POSTS</h1>
      {data.map((p)=>{
        <h1>a.title</h1>
      })}
    </div>
  )
}

export default Getallposts

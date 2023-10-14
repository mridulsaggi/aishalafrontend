import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Post from "./Post.js"
// import "./style.css"
import Discuss from "./Discuss.js"
const Page = () => {
  const [state, setstate] = useState(false)
  const clickhandler = () => {
    setstate(!state)
  }

  return (
    <div className='m'>
      <div className='dp'>
        <button onClick={clickhandler} className='bt'>POST</button>
        <button onClick={clickhandler} className='bt'>DISCUSSION</button>
      </div>
      {state ? <Post /> : <Discuss />}
    </div>
  )
}

export default Page

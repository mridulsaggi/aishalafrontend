import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Post from "./Post.js"
// import "./style.css"
import Discuss from "./Discuss.js"
import { Context } from '../../../index.js'
import Please from '../../../login/pages/please.js'
const Page = () => {
  const [state, setstate] = useState(false)
  const { isauthenticated, setisauthenticated} = useContext(Context); //global variables

  const clickhandler = () => {
    setstate(!state)
  }
  if(!isauthenticated){
    return <Please/>
  }
  else{

    return (
      <div className='m'>
        <div className='dp'>
          <button onClick={clickhandler} className='bt signinup'>POST</button>
          <button onClick={clickhandler} className='bt signinup'>DISCUSSION</button>
        </div>
        {state ? <Post /> : <Discuss />}
      </div>
    )
  }
}

export default Page

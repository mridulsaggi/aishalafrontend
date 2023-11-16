import React from 'react'
import "../style/style.css"
import { Link } from 'react-router-dom'
// const submithandler = async (e) => {
//   try {
//     const data = await axios.get(`http://localhost:3001/logout`, {
//       withCredentials: true,
//     })
//     toast.success("user loged out")
//     setisauthenticated(false);
//     setloading(false)
//   } catch (error) {
//     setisauthenticated(true);
//     console.log(error);
//     setloading(false);
//     toast.error("error")
//   }
// }

const Buttons = () => {
  return (
      <Link to="/register"><button className='signinup'>SIGNIN/SIGNUP</button></Link>
  )
}

export default Buttons

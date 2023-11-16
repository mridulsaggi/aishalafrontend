import {React,useContext} from 'react'
import "../../style/style.css"
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { Context } from '../../index.js'
import axios from 'axios'
const Logout = () => {
  const { isauthenticated, setisauthenticated} = useContext(Context); //global variables
  const logoutevent = async (e) => {
    try {
      const data = await axios.get(`http://localhost:3001/logout`, {
        withCredentials: true,
      })
      toast.success("user loged out")
      setisauthenticated(false);
  
    } catch (error) {
      setisauthenticated(true);
      console.log(error);
      toast.error("error")
    }
  };

  return (
    <div>
      <Link to="/"><button className='signinup' onClick={logoutevent}>LOGOUT</button></Link>
    </div>
  )
}

export default Logout

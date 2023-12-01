import axios from "axios";

import {React,useContext} from "react";
import "../../login/index.css"
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Context } from '../../index.js'
import { Link, Navigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";

// const Login = () => {
//   const toggle = () => {
//     setstate(!state);
//   };
//   const [isauth, setisauth] = useState(false);
//   const [state, setstate] = useState(false);
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");
//   const submithandler1 = async (e, req, res) => {
//     e.preventDefault();
//     try {
//       const ans = await axios.post(
//         "http://localhost:3000/studentlogin",
//         { email, password },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );
//       if (ans.data.success) {
//         toast.success(ans.data.message);
//         setemail("");
//         setpassword("");
//         console.log(ans.data.message);
//         setisauth(true);
//       } else {
//         toast.error(ans.data.message);
//         setpassword("");
//         // setemail("")
//         console.log(ans.data.message);
//         setisauth(false);
//       }
//     } catch (error) {
//       toast.error(error.response.data.message);
//       console.log(error);
//       setisauth(false);
//     }
//   };
//   const submithandler2 = async (e, req, res) => {
//     e.preventDefault();
//     try {
//       const ans = await axios.post(
//         "http://localhost:3000/teacherlogin",
//         { email, password },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );
//       if (ans.data.success) {
//         toast.success(ans.data.message);
//         setemail("");
//         setpassword("");
//         console.log(ans.data.message);
//         setisauth(true);
//       } else {
//         toast.error(ans.data.message);
//         setpassword("");
//         //   setemail("")
//         console.log(ans.data.message);
//         setisauth(false);
//       }
//     } catch (error) {
//       toast.error(error.response.data.message);
//       console.log(error);
//       setisauth(false);
//     }
//   };
//   if (isauth) {
//     console.log(isauth);
//     return <Navigate to={"/home"} />;
//   } else {
//     if (!state) {
//       return (
//         <>
//           <div className="choice">
//             <button onClick={toggle}>login as teacher</button>
//           </div>
//           <form className="form" onSubmit={submithandler1}>
//             <input
//               type="email"
//               required
//               name="email"
//               placeholder="email"
//               value={email}
//               onChange={(e) => {
//                 setemail(e.target.value);
//               }}
//             />
//             <input
//               type="password"
//               required
//               name="password"
//               placeholder="password"
//               value={password}
//               onChange={(e) => {
//                 setpassword(e.target.value);
//               }}
//             />
//             <button className="btn">login</button>
//           </form>
//         </>
//       );
//     }
//     return (
//       <>
//         <div className="choice">
//           <button onClick={toggle}>login as student</button>
//         </div>
//         <form className="form" onSubmit={submithandler2}>
//           <input
//             type="email"
//             required
//             name="email"
//             placeholder="email"
//             value={email}
//             onChange={(e) => {
//               setemail(e.target.value);
//             }}
//           />
//           <input
//             type="password"
//             required
//             name="password"
//             placeholder="password"
//             value={password}
//             onChange={(e) => {
//               setpassword(e.target.value);
//             }}
//           />
//           <button className="btn">login</button>
//         </form>
//       </>
//     );
//   }
// };

// export default Login;

const Login = () => {
  // ALL USESTATE VARIABLES ARE DEFINED HERE

  const [state, setstate] = useState(false);
  const [isauth, setisauth] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { isauthenticated, setisauthenticated,tlogin,settlogin} = useContext(Context); //global variables


  // TOGGLE FUNCTION FOR CHOOSING BETWEEN LOGIN AS STUDENT AND LOGIN AS TEACHER
  const toggle = () => {
    setstate(!state);
  };

  //   SUBMIT HANDLER FOR STUDENT
  const submithandlerStudent = async (e, req, res) => {
    e.preventDefault();
    try {
      const ans = await axios.post(
        "http://localhost:3001/studentlogin",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(ans);
      if (ans.data.success) {
        toast.success(ans.data.message);
        setemail("");
        setpassword("");
        console.log(ans.data.message);
        setisauth(true);
        setisauthenticated(true);
      } else {
        toast.error(ans.data.message);
        setpassword("");
        // setemail("")
        console.log(ans.data.message);
        setisauth(false);
        setisauthenticated(false);

      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
      setisauth(false);
      setisauthenticated(false);

    }
  };

  //   SUBMIT HANDLER FOR TEACHER
  const submithandlerTeacher = async (e, req, res) => {
    e.preventDefault();
    try {
      const ans = await axios.post(
        "http://localhost:3001/teacherlogin",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (ans.data.success) {
        toast.success(ans.data.message);
        setemail("");
        setpassword("");
        console.log(ans.data.message);
        setisauth(true);
        settlogin(true);
        setisauthenticated(true);

      } else {
        toast.error(ans.data.message);
        setpassword("");
        //   setemail("")
        console.log(ans.data.message);
        setisauth(false);
        setisauthenticated(false);

        settlogin(false);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
      setisauth(false);
        setisauthenticated(false);

      settlogin(false);
    }
  };
  if (isauthenticated) {
    console.log(isauth);
    return <Navigate to={"/page"} />;
  }

  return (
    <>
      <section className="login">
        <div className="left">
          <h1>Welcome to Ai-Shala</h1>
          <div className="toggle">
            <button className={state ? "" : "activeBtn"} onClick={toggle}>
              Teacher Login
            </button>
            <button className={state ? "activeBtn" : ""} onClick={toggle}>
              Student Login
            </button>
          </div>
          <form
            className="form"
            onSubmit={state ? submithandlerStudent : submithandlerTeacher}
          >
            <div className="form-comp">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                required
                name="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
            <div className="form-comp">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                required
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </div>
            <button className="btn">Login</button>
            <div>New user? <Link to="/register">SIGNUP</Link></div>
          </form>
        </div>
        <div className="right"></div>
      </section>
    </>
  );
};

export default Login;

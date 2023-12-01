import axios from "axios";
import React, { useState ,useContext} from "react";
import { toast } from "react-hot-toast";
import { Navigate, Link } from "react-router-dom";
import "../../login/index.css"
import { Context } from '../../index.js'

// const Register = () => {
//   const toggle = () => {
//     setstate(!state);
//   };
//   const [isauth, setisauth] = useState(false);
//   const [state, setstate] = useState(false);
//   const [name, setname] = useState("");
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");
//   const [secretkey, setsecretkey] = useState("");

//   const submithandler1 = async (e, req, res) => {
//     e.preventDefault();
//     try {
//       const ans = await axios.post(
//         "http://localhost:3000/studentregister",
//         { name, email, password },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );
//       if (ans.data.success) {
//         toast.success(ans.data.message);
//         setname("");
//         setemail("");
//         setpassword("");
//         console.log(ans.data.message);
//         setisauth(true);
//       } else {
//         toast.error(ans.data.message);
//         setpassword("");
//         setemail("");
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
//         "http://localhost:3000/teacherregister",
//         { name, email, password, secretkey },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );
//       if (ans.data.success) {
//         toast.success(ans.data.message);
//         setname("");
//         setemail("");
//         setsecretkey("");
//         setpassword("");
//         console.log(ans.data.message);
//         setisauth(true);
//       } else {
//         toast.error(ans.data.message);
//         setpassword("");
//         setemail("");
//         setsecretkey("");
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
//   }
//   if (!state) {
//     return (
//       <>
//         <div className="choice">
//           <button onClick={toggle}>register as teacher</button>
//         </div>
//         <form className="form" onSubmit={submithandler1}>
//           <input
//             type="text"
//             required
//             name="name"
//             placeholder="name"
//             value={name}
//             onChange={(e) => {
//               setname(e.target.value);
//             }}
//           />
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
//           <button className="btn">register</button>
//         </form>
//       </>
//     );
//   }
//   return (
//     <>
//       <div className="choice">
//         <button onClick={toggle}>register as student</button>
//       </div>
//       <form className="form" onSubmit={submithandler2}>
//         <input
//           type="text"
//           required
//           name="name"
//           placeholder="name"
//           value={name}
//           onChange={(e) => {
//             setname(e.target.value);
//           }}
//         />
//         <input
//           type="email"
//           required
//           name="email"
//           placeholder="email"
//           value={email}
//           onChange={(e) => {
//             setemail(e.target.value);
//           }}
//         />
//         <input
//           type="password"
//           required
//           name="password"
//           placeholder="password"
//           value={password}
//           onChange={(e) => {
//             setpassword(e.target.value);
//           }}
//         />
//         <input
//           type="password"
//           required
//           name="secretkey"
//           placeholder="secretkey"
//           value={secretkey}
//           onChange={(e) => {
//             setsecretkey(e.target.value);
//           }}
//         />
//         <button className="btn">register</button>
//       </form>
//     </>
//   );
// };

const Register = () => {
  const [isauth, setisauth] = useState(false);
  const [state, setstate] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [secretkey, setsecretkey] = useState("");
  const { isauthenticated, setisauthenticated} = useContext(Context); //global variables


  const toggle = () => {
    setstate(!state);
  };

  const submithandlerStudent = async (e, req, res) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        
        "http://localhost:3001/studentregister",
        { name, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (data.success) {
        toast.success(data.message);
        setname("");
        setemail("");
        setpassword("");
        console.log(data.message);
        setisauthenticated(true);
        setisauth(true);
      } else {
        toast.error(data.message);
        setpassword("");
        setemail("");
        console.log(data.message);
        setisauthenticated(false);        
        setisauth(false);        

      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
      setisauthenticated(false);
      setisauth(false);
    }
  };

  const submithandlerTeacher = async (e, req, res) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3001/teacherregister",
        { name, email, password, secretkey },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log(data);
      console.log(secretkey);
      if (data.success) {
        toast.success(data.message);
        setname("");
        setemail("");
        setsecretkey("");
        setpassword("");
        setisauthenticated(true);
        setisauth(true);
      } else {
        toast.error(data.message);
        setpassword("");
        // setemail("");
        setsecretkey("");
        console.log(data.message);
        setisauthenticated(false);
        setisauth(false);
      }

      // } catch (error) {
      //   toast.error("some error.");
      //   console.log(error);
      // }
      //   if (ans.data.success) {
      //     toast.success(ans.data.message);
      //     setname("");
      //     setemail("");
      //     setsecretkey("");
      //     setpassword("");
      //     console.log(ans.data.message);
      //     setisauth(true);
      //   } else {
      //     toast.error(ans.data.message);
      //     setpassword("");
      //     setemail("");
      //     setsecretkey("");
      //     console.log(ans.data.message);
      //     setisauth(false);
      //   }
    } catch (error) {
      // toast.error(error.response.data.message);
      console.log(error);
      setisauth(false);
      setisauthenticated(false);
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
              Sign up as Teacher
            </button>
            <button className={state ? "activeBtn" : ""} onClick={toggle}>
              Sign up as Student
            </button>
          </div>
          <form
            className="form"
            onSubmit={state ? submithandlerStudent : submithandlerTeacher}
          >
            <div className="form-comp">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                required
                name="name"
                placeholder="Full name"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
            </div>
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
            {!state && (
              <div className="form-comp">
                <label htmlFor="secretkey">Secret Key</label>
                <input
                  type="password"
                  required
                  name="secretkey"
                  placeholder="secretkey"
                  value={secretkey}
                  onChange={(e) => {
                    setsecretkey(e.target.value);
                  }}
                />
              </div>
            )}
            {/* <button className="btn">Login</button> */}
            <button className="btn">Sign up</button>
            <div>already a user? click to <Link to="/login">LOGIN</Link></div>
          </form>
        </div>
        <div className="right"></div>
      </section>
    </>
  );
};

export default Register;

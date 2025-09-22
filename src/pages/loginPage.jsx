import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";


export default function LoginPage() {

  const [email, setEmail] = useState("");   // 🔥 empty string, not "Your email"
  const [password, setPassword] = useState("");

  function loging() {
    axios.post("http://localhost:3000/api/users/login", {
      email: email,
      password: password
    }).then((res) => {

       console.log("Login response ", res.data);

      if(res.data.user == null){
        toast.error(res.data.message)
        return
      }

      localStorage.setItem("token",res.data.token)

      if(res.data.user.type === "admin"){
        window.location.href = "/admin"
      }
    })
  }

  return (
    <div className="flex justify-center items-center w-full h-screen bg-pink-300">
      <div className="w-[450px] h-[450px] bg-pink-200 flex flex-col justify-center items-center">
        <img src="/logo.jpeg" className="rounded-full w-[100px] h-[100px]" alt="logo"></img>
        
        <span>Email</span>
        <input
          className="bg-amber-50"
          type="text"
          placeholder="Your email"   // 🔥 placeholder only
          value={email}              // 🔥 controlled input
          onChange={(e) => setEmail(e.target.value)}
        />

        <span>Password</span>
        <input
          type="password"
          className="bg-amber-50"
          placeholder="Password"
          value={password}            // 🔥 controlled input
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={loging} className="bg-purple-400">Login</button>
      </div>
    </div>
  );
}

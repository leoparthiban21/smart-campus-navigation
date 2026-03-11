import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {

    if(email && password){
      navigate("/dashboard");
    }else{
      alert("Enter email and password");
    }

  };

  return (

    <div className="login-container">

      <h2>Campus Navigation Login</h2>

      <input
      type="email"
      placeholder="Email"
      onChange={(e)=>setEmail(e.target.value)}
      />

      <input
      type="password"
      placeholder="Password"
      onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
      Login
      </button>

    </div>
  );
}

export default Login;
import { useState } from "react";
import "../css/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({setRoles}) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/auth/login", {username, password, role})
    .then(res => {
      if(res.data.login && res.data.role == "admin") {
        setRoles("admin");
        navigate("/dashboard");
      }
      else if(res.data.login && res.data.role == "student") {
        setRoles("student");
        navigate("/");
      }
      console.log(res);
    })
    .catch(err => console.log(err));
  }

  return (
    <div className='login-page'>
        <form className='login-container' onSubmit={handleSubmit} >
          <h2>Login</h2> <br />

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}/>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select name="role" id="role"
            onChange={(e) => setRole(e.target.value)} defaultValue="admin">
              <option value="admin">Admin</option>
              <option value="student">Student</option>
            </select>
          </div>

          <button type="submit" className="btn-login">Login</button>
        </form>
    </div>
  )
}

export default Login
import { useNavigate } from "react-router-dom"
import "./login.css"

export default function Login() {

    const navigate =  useNavigate()
    return <div className="container">
        {/* <button type="button" onClick={()=>navigate(-1)}>back</button> */}
        <div className="login-wrapper">
         <h1 className="heading">Login</h1>
            <div className="username">
                <input type="text" name="username" id="username" placeholder="Enter username" />
            </div>
            <div className="password">
                <input type="password" name="password" id="password" placeholder="Enter Passoword" />
            </div>
            <div className="submit-btn">
                <button type="button" onClick={submit}>Submit</button>
            </div>
        </div>  
    </div>
}

function submit() {
    
}
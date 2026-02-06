import { useNavigate } from "react-router-dom";
import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import "./login.css"

export default function Login() {
    const [user, setuser] = useState([]);
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:2000/login");
                const data = await response.json();
                setuser(data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])

    function submit() {
        console.log(user); 
        console.log(username);
        console.log(password);
        if(username && password){
            navigate("/app")
        }
    }
    const navigate = useNavigate()

    return <>

    <div className="container">
        <div className="app-title"><p>Bugminator</p></div>

        {/* <button type="button" onClick={()=>navigate(-1)}>back</button> */}
        <div className="login-wrapper">
            <form className="login-form">
                <h1 className="heading">Login</h1>
                <div className="username">
                    <input type="text" name="username" value={username} id="username" placeholder="Enter username" onChange={(e)=>setUsername(e?.target?.value)} />
                </div>
                <div className="password">
                    <input type="password" name="password"  value={password}id="password" placeholder="Enter Passoword" onChange={(e)=>setPassword(e?.target?.value)} />
                </div>
                <div className="register">
                    <Link to="signup">register the account</Link>
                </div>
                <div className="submit-btn">
                    <button type="button" onClick={submit}>Submit</button>
                </div>
            </form>

        </div>
    </div>
    </>
}


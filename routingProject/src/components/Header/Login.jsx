
import {useState,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import UserContext from '../UserContext.js'
function Login(){

    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('')
    const {setUser}=useContext(UserContext);     // ye userContext se baat kr rha hai
    const navigate=useNavigate();
    const handleOnSubmit=(e)=>{
       e.preventDefault();
       setUser({userName,password});
       if(userName=='appu kumar' && password=='password')
        navigate('/profile')
      else 
         alert('Invalid credentials');

    }
    return(
        <>
            <form onSubmit={handleOnSubmit}>
                 <input type='text' value={userName} onChange={(e)=>setUserName(e.target.value)} /><br />
                 <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} /><br />
                 <button>Login</button>
            </form>
        </>
    )
}

export default Login;
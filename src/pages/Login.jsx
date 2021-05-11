import React, {useState} from 'react';
import '../styles/components/Login.css';

const Login = () => {
    const [form, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });
    const handleSubmit = event => {
        event.preventDefault();
    }
    const seePass = () => {
        var x = document.getElementById('hidden');
        if (x.type === 'password') x.type= 'text';
        else x.type = "password";
    }
    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value,
        });
    };
    return(
    <div>
        <form className="login__container" onSubmit={handleSubmit}>
            Login
            <input
               name="email"
               type="text"
               placeholder="Email..."
               className="input"
               onChange={handleInput}
            />
            <div className="lastinput">
               <input
                  id='hidden'
                  className='hidden'
                  name="password"
                  type="password"
                  placeholder="Password..."
                  onChange={handleInput}
               />
               <input type="checkbox" className="box" onClick={seePass} />
            </div>
            <button className="confirm__button">Confirm</button>
         </form>
    </div>
);
    };  
export default Login;
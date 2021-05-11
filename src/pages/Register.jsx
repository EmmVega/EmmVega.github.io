import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/Register.css';

const Register = props => {
    const [form, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });

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
    const handleSubmit = event => {
        event.preventDefault();
    }

   return (
      <div>
         <form className="register__container" onSubmit={handleSubmit}>
            Register
            <input
               name="name"
               type="text"
               placeholder="Name..."
               className="input"
               onChange={handleInput}
            />
            <input
               name="email"
               type="text"
               placeholder="Email..."
               className="input"
               onChange={handleInput}
            />
            <input
               name="username"
               type="text"
               placeholder="Username..."
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
            <input
                  className='confirmPass'
                  name="password"
                  type="password"
                  placeholder="Confirm Password..."
                  onChange={handleInput}
               />
            <button className="confirm__button">
                <Link to='account' className='button'>
                Confirm
                </Link>
            </button>
         </form>
      </div>
   );
};

export default Register;
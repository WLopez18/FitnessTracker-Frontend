import React, { useState } from "react";
import { registerUser } from "../../api";

const RegisterButton = ({ setUser }) => {
    const [error, setError] = useState({});
    const [registerUsername, setRegisterUsername] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const handleClick = async () => {
        const response = await registerUser(registerUsername, registerPassword);
        if (response.token) {
            localStorage.setItem('token', response.token);
            setUser(response.user)
        } else {
            setError(response);
        }
        clearForm();
    }
    const clearForm = () => {
        setRegisterUsername('')
        setRegisterPassword('')
    }
    
    return (
        <div>
            <form onSubmit = { registerUser }>
                <input 
                placeholder="username"
                value={registerUsername}
                onChange = {ev => setRegisterUsername(ev.target.value)}
                />
                <input 
                placeholder="password"
                value={registerPassword}
                onChange = {ev => setRegisterPassword(ev.target.value)}
                />
            </form>
            <button onClick={handleClick}>Register</button>
            {error.message && <p style={{ color: 'red', fontWeight: '900' }}>{error.message}</p>}
        </div>
    )
}

export default RegisterButton;
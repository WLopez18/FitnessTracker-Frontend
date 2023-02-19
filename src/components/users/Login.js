import React, { useState } from "react";
import { loginUser } from "../../api";

const LoginButton = ({ setUser }) => {
	const [error, setError] = useState({});
    const [loginUsername, setLoginUsername] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
	const handleClick = async () => {
		const response = await loginUser(loginUsername, loginPassword);
		if (response.token) {
			localStorage.setItem('token', response.token);
			setUser(response.user)
		} else {
			setError(response);
		}
        clearForm();
	}
//this function is to clear the form after hitting the login or register buttone
    const clearForm = () => {
        setLoginUsername('')
        setLoginPassword('')
    }

	return (
		<div>
            <form onSubmit = { loginUser }>
                <input 
                placeholder="username"
                value={loginUsername}
                onChange = {ev => setLoginUsername(ev.target.value)}
                />
                <input 
                placeholder="password"
                value={loginPassword}
                onChange = {ev => setLoginPassword(ev.target.value)}
                />
	        </form>
			<button onClick={handleClick}>Login</button>
			{error.message && <p style={{ color: 'red', fontWeight: '900' }}>{error.message}</p>}
		</div>
	)
}

export default LoginButton;
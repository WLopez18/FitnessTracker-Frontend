import React, { useState } from "react";
import { loginUser } from "../../api";

const LoginButton = ({ setUser }) => {
	const [error, setError] = useState({});
	const handleClick = async () => {
		const response = await loginUser();
		if (response.token) {
			localStorage.setItem('token', response.token);
			setUser(response.user)
		} else {
			setError(response);
		}
	}
	return (
		<div>
			<button onClick={handleClick}>Login</button>
			{error.message && <p style={{ color: 'red', fontWeight: '900' }}>{error.message}</p>}
		</div>
	)
}

export default LoginButton;
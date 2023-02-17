import React, {useState} from "react";

const Login = (props)=> {

	const exchangeTokenForUser = props.exchangeTokenForUser
	const [loginUsername, setLoginUsername] = useState('')
	const [loginPassword, setLoginPassword] = useState('')

	const login = (ev) => {
			ev.preventDefault();
			console.log('login');
			fetch ('http://fitnesstrac-kr.herokuapp.com/api/users/login', {
			method: "POST",
			headers: {
					'Content-Type': 'application/json'
			},
			body: JSON.stringify ({
					user: {
							username: loginUsername,
							password: loginPassword
					}
			})
			})
			.then (response => response.json())
			.then (result => {
			if (!result.success) {
					throw result.error
			}
			const token = result.data.token;
			window.localStorage.setItem('token', token);
			exchangeTokenForUser();
			})
			.catch(error => console.log(error));
	}

return (

	<form onSubmit = { login }>
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
			<button>Login</button>
	</form>
)
}

export default Login
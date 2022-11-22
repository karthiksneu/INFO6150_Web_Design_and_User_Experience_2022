import React,{ useState } from 'react'
import { useEffect } from 'react'
import {useHistory} from 'react-router-dom'
//import { use } from '../../../server';
import Card from '../pages/Card';
function Login() {
  //  const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
   
    async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:8081/user/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
                
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.exist === true) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/'
		} else {
			alert('Please check your username and password')
		}
	}

	return (
		<div>
			<h1>Sign in</h1>
			<form onSubmit={loginUser}>
            <div class="container px-4 px-lg-5">
           <div className="col-sm-3 offset -sm-3">
				<input className='form-control'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email*"
				/>
				<br /><br />
				<input className='form-control'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password*"
				/>
				<br />
                <br/>
				<input class="btn btn-primary" type="submit" value="Login" />
                <br /><br />
                </div>
                </div>
			</form>
            <Card id="Login"></Card>
		</div>
	)
}

export default Login
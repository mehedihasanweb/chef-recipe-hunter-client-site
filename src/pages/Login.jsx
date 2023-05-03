import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const {signIn, googleLogin, githubLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || '/'
    console.log(location);

    const handleLogin =(event)=>{
        event.preventDefault()
        const form = event.target 
        const email = form.email.value 
        const password = form.password.value 

        setError('')
        setSuccess('')
        // console.log(email, password);
        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user
            console.log(loggedUser);
            setSuccess('login successfully')
            navigate(from, {replace: true})
            form.reset()
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const handleGoogleLogin = () =>{
        googleLogin()
        navigate(from, {replace: true})
    }
    const handleGithubLogin =()=>{
        githubLogin()
        navigate(from, {replace: true})
    }

    return (
        <Container style={{ width: "400px", margin: "auto" }} className='mt-5'>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password"required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button><br />
                Do Not Have An Account? <Link to='/register'>Please Register</Link>
            </Form>
            <button onClick={handleGoogleLogin} className='btn btn-outline-info mt-3'><FaGoogle /> Login With Google</button><br />
            <button onClick={handleGithubLogin} className='btn btn-outline-info mt-2'><FaGithub /> Login With Github</button><br />
            <span className='text-danger'>{error}</span>
            <span className='text-success'>{success}</span>
        </Container>
    );
};

export default Login;
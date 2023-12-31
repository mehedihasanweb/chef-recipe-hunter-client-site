import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaRegEye } from "react-icons/fa";
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [showPass, setShowPass] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [accept, setAccept] = useState(false)

    const { createUser } = useContext(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault()

        setError('')
        setSuccess('')
        const form = event.target
        const name = form.name.value
        const photo = form.photo.value 
        const email = form.email.value
        const password = form.password.value

        // validation 
        if (!/^.{6,}$/.test(password)) {
            setError("Please add at least 6 characters")
            return
        }
        createUser(email, password)
            .then(result => {
                const createUser = result.user
                console.log(createUser);
                setSuccess("Login Successfully")
                form.reset()
                updateUserData(result.user, name,photo)
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const updateUserData =(user, name, photo)=>{
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
        .then()
        .catch(error=>{
            console.log(error);
        })
    }


    return (
        <Container style={{ width: "400px", margin: "auto" }} className='mt-5'>
            <h2 className='text-center mb-5 text-bold fs-1'>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <div style={{ position: 'relative' }}>
                        <Form.Control type={showPass ? "text" : "password"} name='password' placeholder="Password" required/>
                        <span className="p-viewer">
                            <FaRegEye onClick={() => setShowPass(!showPass)} style={{ zIndex: '9999', position: 'absolute', top: '30%', right: '10px' }} />
                        </span>
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={(event)=>{
                        setAccept(event.target.checked)
                    }} type="checkbox" name='check' label='Accept terms and condition' />
                </Form.Group>
                <Button variant="primary" disabled={!accept} type="submit">
                    Register
                </Button><br />
                Already Have an account? <Link to="/login">Please Login</Link>
            </Form>

            <span className='text-danger'>{error}</span>
            <span className='text-success'>{success}</span>
        </Container>
    );
};

export default Register;
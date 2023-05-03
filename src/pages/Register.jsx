import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaRegEye } from "react-icons/fa";

const Register = () => {
    const [showPass, setShowPass] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    // setError('')
    // setSuccess('')
    const { createUser } = useContext(AuthContext)
    // console.log(createUser);

    const handleRegister = (event) => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value
        // const photo = form.photo.value 
        const email = form.email.value
        const password = form.password.value

        // console.log(name, email, password);
        // validation 
        if(!/^.{6,}$/.test(password)){
            setError("Please add at least 6 characters")
            return
        }
        createUser(email, password)
            .then(result => {
                const createUser = result.user
                console.log(createUser);
                form.reset()
                setSuccess(success)
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <Container style={{ width: "400px", margin: "auto" }} className='mt-5'>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" />
                </Form.Group> */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <div style={{position: 'relative'}}>
                        <Form.Control type={showPass ? "text" : "password"} name='password' placeholder="Password" />
                        <span className="p-viewer">
                            <FaRegEye onClick={() => setShowPass(!showPass)} style={{ zIndex: '9999', position: 'absolute', top: '30%', right: '10px' }} />
                        </span>
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
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
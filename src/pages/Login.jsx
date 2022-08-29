import axios from 'axios'
import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { notifError } from '../utils/constant'
import { useNavigate } from 'react-router-dom'
import { ToastContainer} from 'react-toastify'
import { BASE_URL_LOGIN } from '../utils/constant'


const Login = () => {
    const [userName, setUserName] = useState(null)
    const [password, setPassword] = useState(null)
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(BASE_URL_LOGIN, {
                username:userName,
                password:password
            })
            localStorage.setItem('token', response.data.access_token)
            if(response.request.status === 200){
                navigate('/Home')
            } else {
                notifError()
            }
        } catch(err){
            console.log(err)
            notifError()
        }
    }
  return (
    <>
        <Container style={{maxWidth:'500px'}} fluid>
        <h2 className="text-center mt-5">Please Login</h2>
        <Form onSubmit={handleSubmit}>  
            <Form.Group style={{color:'white'}} className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control onChange={(e) => setUserName(e.target.value)} type="text" required/>
                <Form.Text>Enter your valid username</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label style={{color:'white'}}>Password</Form.Label>
                <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} required/>
                <Form.Text>Enter your valid password</Form.Text>
            </Form.Group>
            <Button type='submit'>Login</Button>
        </Form>
    </Container>
    <ToastContainer/>
    </>
    
  )
}

export default Login
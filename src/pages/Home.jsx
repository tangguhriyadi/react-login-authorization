import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import { ToastContainer} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import { instance } from '../utils/apiService'
import ReactPaginate from 'react-paginate'
const Home = () => {
    const [projects, setProjects] = useState(null)
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/Login')
    }
    useEffect(()=> {
        const fetchData = async () => {
            try {
            const response = await instance.get('v1/projects/')
            setProjects(response)
            } catch(err){
                console.log(err)
            }
            
        }
        fetchData()
    }, [projects])

  return (
    <>
    <Container className="mt-4" fluid>
    <Button className="float-end" onClick={handleLogout}>logout</Button> <br />
    <h2 className="text-center"> My Projects </h2>
    <ReactPaginate
     previousLabel={'prev'}
     nextLabel={'next'}
    />
    <ToastContainer />
    </Container>
  
    </>
    
  )
}

export default Home
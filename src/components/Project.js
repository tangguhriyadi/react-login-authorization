import React from 'react'

const Project = ({projects, loading}) => {
    if(loading){
        return <h2>loading...</h2>
    }
  return (
    <ul className='list-group mb-4'>
        
    </ul>
  )
}

export default Project
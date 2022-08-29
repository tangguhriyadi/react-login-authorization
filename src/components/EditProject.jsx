import React, {useState} from 'react'
import { Button, Form, Modal } from "react-bootstrap";
import { instance } from "../utils/apiService";
import { useSelector, useDispatch } from 'react-redux/';
import { closeEdit, editAction } from '../actions';
import { notifEdit } from '../utils/constant';

const EditProject = ({selected}) => {
    const [newProject, setNewProject] = useState({name:'', description:''})
    const showEdit = useSelector(state => state.edit)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(closeEdit())
        instance.patch(`v1/projects/${selected.id}`, newProject)
        notifEdit(selected.name)
        dispatch(editAction())
    }
  return (
    <>
    <Modal show={showEdit} onHide={() => dispatch(closeEdit())}>
      <Modal.Header closeButton>
        <Modal.Title>Update Your Project !</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Project Name</Form.Label>
            <Form.Control
              defaultValue={selected.name}
              type="text"
              placeholder="Enter Your Project Name"
              onChange={(e) => setNewProject({...newProject, name: e.target.value})}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              defaultValue={selected.description}
              as="textarea"
              rows={3}
              placeholder="Enter Description"
              onChange={(e) => setNewProject({...newProject, description: e.target.value})}
              required
            ></Form.Control>
          </Form.Group>
          <div className="mt-4 text-end">
          <Button onClick={handleSubmit} type="submit" variant="success">
            Update Project
          </Button>
          </div>
          
        </Form>
      </Modal.Body>
    </Modal>
  </>
  )
}

export default EditProject
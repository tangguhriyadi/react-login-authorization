import React, {useState} from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { instance } from "../utils/apiService";
import { notifAdd } from "../utils/constant";
const AddNewProject = ({ show, handleClose }) => {
    const [newProject, setNewProject] = useState({name: '', description: ''})
    const handleSubmit = (e) => {
        e.preventDefault()
        instance.post('v1/projects/', newProject)
        handleClose()
        notifAdd(newProject.name)
    }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your new project here !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Project Name"
                onChange={(e) => setNewProject({...newProject, name: e.target.value})}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter Description"
                onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                required
              />
            </Form.Group>
            <div className="mt-4 text-end">
            <Button onClick={handleSubmit} type="submit" variant="success">
              Add Project
            </Button>
            </div>
            
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddNewProject;

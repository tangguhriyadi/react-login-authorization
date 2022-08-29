import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { instance } from "../utils/apiService";
import { notifDelete } from "../utils/constant";
import {deleteAction, openEdit} from '../actions'
import { useDispatch } from "react-redux";


const Project = ({ item, setSelected }) => {
    const dispatch = useDispatch()
    
    const handleDelete = () => {
        instance.delete(`v1/projects/${item.id}`)
        dispatch(deleteAction())
        notifDelete(item.name)
    }
    const handleEdit = async () => {
      const data = await instance.get(`v1/projects/${item.id}`)
      setSelected(data.data)
      dispatch(openEdit())
    }
    
  return (
    <>
    <Col className="mb-4" md={4}>
      <Card style={{ minHeight: "235px" }}>
        <Card.Body>
          {item.name ? (
            <Card.Title className="text-center"> {item.name}</Card.Title>
          ) : (
            <Card.Title className="text-center" style={{ color: "red" }}>
              (empty name)
            </Card.Title>
          )}
          <Card.Subtitle className="mb-2 text-muted">
            author: {item.owner}
          </Card.Subtitle>
          {item.description ? (
            <Card.Text>
              {" "}
              description: <br /> {item.description}
            </Card.Text>
          ) : ( 
            <Card.Text > description: <br /><span style={{ color: "red" }}>(empty description)</span></Card.Text>
          )}
          <div className="d-grid gap-2">
            <Button onClick={handleEdit} variant="primary" size="md">
              EDIT
            </Button>
            <Button onClick={handleDelete} variant="danger" size="md">
              DELETE
            </Button>
          </div>
        </Card.Body>
      </Card>
      
    </Col>
</>
  );
};

export default Project;

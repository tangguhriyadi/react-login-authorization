import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const Project = ({ project, loading }) => {
  if (loading) {
    return <h2>loading...</h2>;
  }
  return (
    <>
      <Col className="mb-4" md={4}>
        <Card style={{ minHeight: "211px" }}>
          <Card.Body>
            <Card.Title>{project.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {project.owner}
            </Card.Subtitle>
            <Card.Text className="text-center">{project.description ? project.description : '(empty description)'}</Card.Text>
            
            <div className="d-grid gap-2">
              <Button variant="primary" size="md">
                EDIT
              </Button>
              <Button variant="danger" size="md">
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

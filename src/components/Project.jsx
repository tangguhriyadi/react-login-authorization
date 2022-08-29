import React from "react";
import { Col, Card, Button } from "react-bootstrap";
const Project = ({ item }) => {
  return (
    <Col className="mb-4" md={4}>
      <Card style={{ minHeight: "211px" }}>
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
            <Card.Text style={{ color: "red" }}>(empty description)</Card.Text>
          )}
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
  );
};

export default Project;

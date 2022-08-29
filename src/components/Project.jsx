import React from 'react'
import {Col, Card, Button} from 'react-bootstrap'
const Project = ({item}) => {
  return (
     <Col className="mb-4" md={4}>
        <Card style={{ minHeight: "211px" }}>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {item.owner}
            </Card.Subtitle>
            <Card.Text className="text-center">{item.description ? item.description : '(empty description)'}</Card.Text>
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
  )
}

export default Project
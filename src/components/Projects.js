import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Projects = () => {
    return(
        <Container fluid id="projects" style={{backgroundColor: "#343a40", padding: "20px"}}>
            <h1 style={{width: "100%", textAlign: "center", marginBottom: "50px", marginTop: "20px", color: "#dee2e6"}}>Projects</h1>
            <Row style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title>Hello world</Card.Title>
                            <Card.Text>
                            Program that prints hello world efficiently
                            </Card.Text>
                            <Button variant="primary">Lets see!</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{ width: '100%', margin: "20px 0" }}>
                        <Card.Body>
                            <Card.Title>Spring boot web app</Card.Title>
                            <Card.Text>
                            Online shop written in Spring boot and thymeleaf
                            </Card.Text>
                            <Button variant="primary">Spring?</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title>Android Game</Card.Title>
                            <Card.Text>
                            Go to my GH and see how I build time killing game. 
                            </Card.Text>
                            <Button variant="primary">Go to GH</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Projects;
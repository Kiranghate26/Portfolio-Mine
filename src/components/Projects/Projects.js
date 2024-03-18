import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Define project data
const projectsData = [
  {  
 
    title: "Auction Based",
    description: "This application is used by end user for sell and purchase second hand machineries. we build user interface more interactive and user friendly. Multiple user can place there auction on single machine and highest bidder can win machine. We provide searching interface for machinery, and provide easy way to chat with seller as well as Machinery-Max representative.",
    // ghLink: "",
    
  },
  {
   
    title: "Talent Managment System",
    description: "Talent Management System web application used for tracking the user details from calfus based on there tech stack and learning tech stack, and keep tracking of technology utilization. It help to know how many employee belong to same technology, and what level of proficiency they have and what skill set they need to improve .",
    // ghLink: "",
    
  },
  {
   
    title: "Data dashboard",
    description: "Based on Representing an information in form of pie chart, donut chart, bar graph, and different graph and charts. in this project we used C3 library for chart, and represent information into graphical format.",
    // ghLink: "",
    
  },
  {
   
    title: "Wheather App",
    description: "A simple weather app built using React.js, fetching real-time weather data from a weather API. Features include:- Current weather conditions display for any location- Hourly and daily weather forecasts- Ability to search for weather by city name ",
    // ghLink: "",
    
  },
  // Add more project data here...
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsData.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

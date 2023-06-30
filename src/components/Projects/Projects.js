import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import okampus from "../../Assets/Projects/okampus.png";
import meeting from "../../Assets/Projects/meeting.jpg";
import travelAgency from "../../Assets/Projects/travelAgency.png";
import portefolio from "../../Assets/Projects/portefolio.png";
import pki from "../../Assets/Projects/pki.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={okampus}
              isBlog={false}
              title="Okampus"
              description="This platform aims to offer an alternative school-student channel to email (via a forum), design a space dedicated to student associations, add other services for students (such as wikis, document sharing, etc.) and all this in a modern platform."
              ghLink="https://github.com/Okampus/okampus"
              demoLink="https://efrei.okampus.fr/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meeting}
              isBlog={false}
              title="Meeting"
              description="This platform not only enables you to plan/organize events, but also to find out about and register for the various events taking place in our region."
              ghLink="https://github.com/Junior-D-Lewis/ProjetWeb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travelAgency}
              isBlog={false}
              title="Travel Agency"
              description="Would you like to go on holiday but don't know where? This site is for you! It suggests destinations according to your needs, preferences and budget."
              ghLink="https://github.com/Junior-D-Lewis/travel_agency"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portefolio}
              isBlog={false}
              title="Junior DJOMO"
              description="After so many applications for work-study placements and internships, I decided it was time for me to adopt a better way of showing my different skills. So I had the bright idea of expressing my know-how through a portfolio."
              ghLink="https://github.com/Junior-D-Lewis/portfolio"
              demoLink="https://gatien.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pki}
              isBlog={false}
              title="PKI with Python"
              description="Creation of a PKI with python, the aim of this project was to create our own certification unit so that we could in turn be able to certify other web users."
              ghLink="https://github.com/Junior-D-Lewis/pki-python"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

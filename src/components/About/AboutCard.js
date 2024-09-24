import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Junior DJOMO </span>
            from <span className="purple"> Douala.</span>
            <br />
            As a young graduate with a passion for web and mobile development, 
            I'm equally at home on the front-end and back-end. Creative and inquisitive, 
            I enjoy designing high-performance, intuitive applications, with a particular focus on the user experience. 
            Always on the lookout for new challenges, I regularly train in emerging technologies to stay at 
            the cutting edge. If you're looking for a versatile developer, 
            capable of taking a project from concept to production, I'm ready to collaborate.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing sports (Basketball, Fitness)
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading manga
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Success is not an accident, success is actually a choice."{" "}
          </p>
          <footer className="blockquote-footer">Stephen Curry</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

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
            from <span className="purple"> Douala, Camerounn.</span>
            <br /> I'm in my final year of a Software Engineering major at ESIEA
            <br />
            Additionally, I'm currently employed as a full-stack developer at Okampuys.
            <br />
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

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import me from "../../Assets/me.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillGitlab,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSEZ-MOI <span className="purple">ME PRÉSENTER</span>
            </h1>
            <p className="home-about-body">
              Passionné par la programmation, j’ai acquis des compétences solides
              dans plusieurs langages, notamment&nbsp;
              <i>
                <b className="purple">JavaScript, TypeScript et Java</b>
              </i>
              .
              <br />
              <br />
              Mes loisirs principaux sont&nbsp;
              <i>
                <b className="purple">le basketball, la lecture</b>
              </i>
              , ainsi que tout ce qui touche au&nbsp;
              <b className="purple">développement logiciel</b>.
              <br />
              <br />
              Je mets régulièrement ma passion en pratique à travers le développement avec&nbsp;
              <b className="purple">Node.js, Nest.js</b> et les bibliothèques
              et frameworks modernes&nbsp;
              <i>
                <b className="purple">JavaScript et JAVA</b>
              </i>
              , comme&nbsp;
              <i>
                <b className="purple">React.js et Next.js, SpringBoot</b>
              </i>
              , en utilisant&nbsp;
              <i>
                <b className="purple">TypeScript</b>
              </i>
              .
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={me} className="img-fluid me" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>RETROUVEZ-MOI SUR</h1>
            <p>
              N’hésitez pas à{" "}
              <span className="purple">me contacter</span> via mes réseaux sociaux
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://gitlab.com/juniordjomo07"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGitlab />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/junior-D-Lewis"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/JuniorDjomo6"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/junior-djomo-811247224/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/djomojunior/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous, je suis <span className="purple">Junior DJOMO </span>
            <br />
            En tant que récent diplômé passionné par le développement web et mobile,
            je maîtrise à la fois le développement front-end et back-end. Créatif
            et curieux, j'aime concevoir des applications performantes, intuitives et
            axées sur l'expérience utilisateur.
            <br />
            <br />
            Toujours à la recherche de nouveaux défis, je me forme régulièrement aux
            technologies émergentes pour rester à la pointe. Si vous recherchez un
            développeur polyvalent capable de mener un projet de la conception à la
            production, je suis prêt à collaborer.
            <br />
            <br />
            En dehors du codage, j'aime aussi passer mon temps libre à m'engager dans
            diverses activités qui alimentent ma créativité et mon esprit d'équipe !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Faire du sport (Basketball, Fitness)
            </li>
            <li className="about-activity">
              <ImPointRight /> Lire des mangas
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Le succès n'est pas le fruit du hasard, c'est en réalité un choix."{" "}
          </p>
          <footer className="blockquote-footer">Stephen Curry</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import okampus from "../../Assets/Projects/okampus.png";
import meeting from "../../Assets/Projects/meeting.jpg";
import travelAgency from "../../Assets/Projects/travelAgency.png";
import portefolio from "../../Assets/Projects/portefolio.png";
import soweteach from "../../Assets/Projects/soweteach.png";
import jobi from "../../Assets/Projects/jobi.svg";
import tefps from "../../Assets/Projects/tefps.jpg";
import pki from "../../Assets/Projects/pki.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets Récents</strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobi}
              isBlog={false}
              title="Jobtrack"
              description="Application web full-stack développée avec Next.js, TypeScript, PostgreSQL, Prisma, Hono et BetterAuth pour gérer l'authentification dans le cadre de la gestion des candidatures à des postes : ajout, recherche, filtrage, suppression et suivi des candidatures. Interface moderne avec mode clair/foncé, authentification sécurisée (JWT) et tableau de bord interactif pour visualiser l'avancement des candidatures."
              demoLink="https://www.jobtrack.fr/sign-in"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soweteach}
              isBlog={false}
              title="SoWeTeach – Plateforme de mise en relation avec des formateurs"
              description="Participation à la développement d'une solution web facilitant le recrutement, la planification et la gestion de formateurs qualifiés. Contribution à l'optimisation de l'interface utilisateur et à l'intégration d'outils de gestion, avec un accent sur la facilité d'utilisation, l'accès rapide aux experts locaux et la transparence des prix."
              demoLink="https://www.soweteach.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tefps}
              isBlog={false}
              title="TeFPS – Solution de gestion du Forfait Post-Stationnement"
              description="Contribution à la mise en place d'une plateforme complète utilisée par les collectivités locales pour gérer le contrôle du stationnement, les paiements et les recours. Intégration d'outils de suivi, de tableaux de bord interactifs et optimisation des flux de données entre les terminaux de contrôle, les serveurs centraux et les services aux utilisateurs."
              demoLink="https://tepv.fr/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={okampus}
              isBlog={false}
              title="Okampus"
              description="Cette plateforme vise à offrir un canal alternatif école-étudiant à l'email (via un forum), concevoir un espace dédié aux associations étudiantes, ajouter d'autres services pour les étudiants (comme des wikis, le partage de documents, etc.) et tout cela dans une plateforme moderne."
              ghLink="https://github.com/Okampus/okampus"
              demoLink="https://efrei.okampus.fr/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meeting}
              isBlog={false}
              title="Meeting"
              description="Cette plateforme permet non seulement de planifier/organiser des événements, mais aussi de s'informer et de s'inscrire aux différents événements qui se déroulent dans notre région."
              ghLink="https://github.com/Junior-D-Lewis/ProjetWeb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travelAgency}
              isBlog={false}
              title="Travel Agency"
              description="Vous souhaitez partir en vacances mais ne savez pas où ? Ce site est fait pour vous ! Il vous propose des destinations en fonction de vos besoins, de vos préférences et de votre budget."
              ghLink="https://github.com/Junior-D-Lewis/travel_agency"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portefolio}
              isBlog={false}
              title="Junior DJOMO"
              description="Après de nombreuses candidatures pour des stages et contrats en alternance, j'ai décidé de valoriser mes compétences autrement, en créant ce portfolio. Aujourd’hui, je suis à la recherche d’un CDI pour mettre à profit mon savoir-faire et relever de nouveaux défis professionnels."
              ghLink="https://github.com/Junior-D-Lewis/portfolio"
              demoLink="https://gatien.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pki}
              isBlog={false}
              title="PKI avec Python"
              description="Création d'une PKI avec python, l'objectif de ce projet était de créer notre propre unité de certification afin que nous puissions à notre tour certifier d'autres utilisateurs du web."
              ghLink="https://github.com/Junior-D-Lewis/pki-python"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

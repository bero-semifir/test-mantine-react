import React, { useEffect, useState } from "react";
import FormationService from "../Formation/Formation.service";
import ListeAccueil from "./ListeAccueil";
import Flex from "../shared/Flex.layout";
import { Button, Image, Tooltip } from "@mantine/core";
import { Link } from "react-router-dom";

const Accueil: React.FunctionComponent = (): JSX.Element => {
  const [formations, setFormations] = useState<string[]>([]);
  const [formateurs, setFormateurs] = useState<string[]>([
    "Cyriem Leclaeck",
    "Thomas Timio",
    "Hacene Hamroune",
    "Romain Vasseur",
    "Benoit Routier",
  ]);
  const [organismes, setOrganismes] = useState<string[]>([
    "M2i",
    "SQLI Aston",
    "2iTech",
    "IB Formation",
    "Dawon",
    "Enigma",
    "AJC",
  ]);

  useEffect(() => {
    FormationService.getFormations().then((resp) => {
      const formationResp = resp.data.map(
        (formation: any) => formation.intitule
      );
      setFormations(formationResp);
    });
  }, []);

  return (
    <div>
      <h1>Gestion des formations</h1>
      <h2>Le site du Poulet</h2>
      {/* 3 Cartes qui affichent Formations, Formateurs et Organismes */}
      <Flex>
        <ListeAccueil
          icone={
            <Image
              src="https://images.unsplash.com/photo-1581726707445-75cbe4efc586?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
              alt="Formation"
              height={180}
            />
          }
          listeElements={formations}
          titreListe={"Formations"}
          footer={
            <Link to="/formation">
              <Button>Voir les formations</Button>
            </Link>
          }
        />
        <ListeAccueil
          icone={
            <Image
              src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              height={180}
            />
          }
          listeElements={formateurs}
          titreListe={"Formateurs"}
          footer={<Button disabled title="La liste des formateurs n'est pas encore disponible">Voir les formations</Button>}
        />
        <ListeAccueil
          icone={
            <Image
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              height={180}
            />
          }
          listeElements={organismes}
          titreListe={"Organismes"}
          footer={
            <Link to="/formation">
              <Button>Voir les formations</Button>
            </Link>
          }
        />
      </Flex>
    </div>
  );
};

export default Accueil;

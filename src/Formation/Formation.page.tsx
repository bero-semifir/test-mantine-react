import React, { useEffect, useState } from "react";
import { Badge, List, Title } from "@mantine/core";
import FormationService from "./Formation.service";
import { Formation } from "./Formation.type";

const FormationPage = () => {
  const [formations, setFormations] = useState<Formation[]>([]);

  useEffect(() => {
    FormationService.getFormations().then((resp) => setFormations(resp.data));
  }, []);

  return (
    <div>
      <Title>Formations</Title>

      <List>
        {formations.map((formation) => 
          <List.Item key={formation.intitule}>
            {formation.intitule}
            {formation.categories.map((categorie, index) =>
              <Badge key={`${formation}-${index}`}>{categorie}</Badge>
            )}
          </List.Item>
        )}
      </List>
    </div>
  );
};

export default FormationPage;

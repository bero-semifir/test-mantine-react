import { FunctionComponent } from "react";
import { Card, List } from "@mantine/core";

export type ListeAccueilProps = {
  icone: JSX.Element;
  listeElements: string[];
  titreListe: string;
  footer: JSX.Element;
};

const ListeAccueil: FunctionComponent<ListeAccueilProps> = ({
  icone,
  listeElements,
  titreListe,
  footer,
}: ListeAccueilProps): JSX.Element => {
  return (
    <Card withBorder radius="md" p="md" m="xs">
      <Card.Section>{icone}</Card.Section>
      <Card.Section p="md">
        <h3>{titreListe}</h3>
      </Card.Section>
      <Card.Section p="md">
        <List>
          {listeElements.map((element) => (
            <List.Item key={element}>{element}</List.Item>
          ))}
        </List>
      </Card.Section>
      {footer}
    </Card>
  );
};

export default ListeAccueil;

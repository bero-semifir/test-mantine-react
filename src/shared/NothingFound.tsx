import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  Group,
} from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  inner: {
    position: "relative",
  },

  image: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    zIndex: 0,
    opacity: 0.75,
  },

  content: {
    paddingTop: 220,
    position: "relative",
    zIndex: 1,

    [theme.fn.smallerThan("sm")]: {
      paddingTop: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: "center",
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 540,
    margin: "auto",
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}));

const NothingFoundBackground = () => {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>Il n'y a rien ici !</Title>
          <Text
            color="dimmed"
            size="lg"
            align="center"
            className={classes.description}
          >
            La page que vous essayez d'ouvrir n'existe pas. Vous avez peut-être
            mal tapé l'adresse ou le la page a été déplacée vers une autre URL.
            Si vous pensez qu'il s'agit d'une erreur, contactez l'assistance.
          </Text>
          <Group position="center">
            <Link to="/">
              <Button size="md">Ramenez moi en lieux sûr</Button>
            </Link>
          </Group>
        </div>
      </div>
    </Container>
  );
};

export default NothingFoundBackground;

import {
  createStyles,
  Title,
  Button,
  Container,
  Group,
  BackgroundImage,
} from "@mantine/core";
import { Link, useSearchParams } from "react-router-dom";
import happyFace from "../assets/happy.png";
import sadFace from "../assets/sad.png";
import bgImage from '../assets/25235.jpg'
const useStyles = createStyles(theme => ({
  root: {
    height:'80vh',
    paddingTop: 80,
    paddingBottom: 80,
  },

  label: {
    textAlign: "center",
    marginBottom: theme.spacing.xl * 1.5,
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: "center",
    fontWeight: 900,
    fontSize: 38,
  },
  img: {
    width: "300px",
  },
  button: {
    marginTop: "35px",
  },
  link: {
    textDecoration: "none",
    color: "blue",
  },
}));

const ResultPage = () => {
  const { classes } = useStyles();
  const [searchParams] = useSearchParams();

  const result = searchParams.get("win");

  return (
    <BackgroundImage src={bgImage} radius="sm">

      <Container className={classes.root}>
        {/* ternary operator for both cases(win and lose) */}
        {result === "true" ? (
          <>
            <div className={classes.label}>
              <img className={classes.img} src={happyFace} alt="happyFace" />
            </div>
            <Title className={classes.title}>"Congrats you won!"</Title>
          </>
        ) : (
          <>
            <div className={classes.label}>
              <img className={classes.img} src={sadFace} alt="sadFace" />
            </div>
            <Title className={classes.title}>
              "Well, you lost this time, you can try a different strategy"
            </Title>
          </>
        )}
        <Group position="center">
          <Link to={"/"} className={classes.link}>
            <Button className={classes.button} variant="subtle">
              Take me back to home page
            </Button>
          </Link>
          <Link to={"/guessnumber?max=10"} className={classes.link}>
            <Button className={classes.button} variant="subtle">
              Play again
            </Button>
          </Link>
        </Group>
      </Container>
    </BackgroundImage>
  );
};

export default ResultPage;

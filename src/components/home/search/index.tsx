import {
  BackgroundImage,
  Box,
  Center,
  createStyles,
  Title,
} from "@mantine/core";
import { useTranslation } from "next-i18next";
import { SearchForm } from "./SearchForm";

export function Search() {
  const { classes } = useStyles();
  const { t } = useTranslation(["home"]);

  return (
    <Box className={classes.wrapper} pb={60}>
      <BackgroundImage
        className={classes.bgImage}
        src="https://images.unsplash.com/photo-1557955776-857434f1c951?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      >
        <Center className={classes.container} p="md">
          <Title color="white">{t("home.heroTitle")}</Title>
          <SearchForm />
        </Center>
      </BackgroundImage>
    </Box>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    height: 400,
  },
  bgImage: {
    height: "100%",
  },
  container: {
    height: "100%",
    flexDirection: "column",
  },
  btnSearch: {
    fontSize: theme.fontSizes.sm,
  },
}));

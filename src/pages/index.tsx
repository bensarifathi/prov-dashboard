import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, Container } from 'react-bootstrap'

function Home() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <h1 className="text-center">{t("Welcome")}</h1>
      <Container>
        <Button variant='outline-danger' onClick={() => changeLanguage("en")}>EN</Button>
        <Button variant='outline-danger' onClick={() => changeLanguage("fr")}>FR</Button>
      </Container>
      
      <Link to="/todo">Go to TODO page</Link>
    </div>
  );
}

export default Home;

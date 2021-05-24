import React, { Component, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTranslation, withTranslation } from "react-i18next";

class LegacyWelcomeClass extends Component {
  render() {
    const { t } = this.props;
    return <h2>{t("greeting")}</h2>;
  }
}
const Welcome = withTranslation()(LegacyWelcomeClass);

function Page() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log("Change language to", lng);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome />
        <button type="button" onClick={() => changeLanguage("en")}>
          en
        </button>
        <button type="button" onClick={() => changeLanguage("de")}>
          de
        </button>
        <button type="button" onClick={() => changeLanguage("cn")}>
          cn
        </button>
        <button type="button" onClick={() => changeLanguage("ru")}>
          ru
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const Loader = () => (
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}

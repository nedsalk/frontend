import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./store";
import Router from "./router/Router";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LOCALES from "./locales";

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

i18next.use(initReactI18next).init({
  resources: LOCALES,
  lng: "tr",
  fallbackLng: "tr",
  interpolation: {
    escapeValue: false,
  },
});

Sentry.init({
  dsn: "https://88f305bbb3ef4cfe956e009220f8d481@o4504775680196608.ingest.sentry.io/4504775682293760",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);

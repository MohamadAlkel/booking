import * as React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import * as Sentry from "@sentry/browser";
import "./favicon.ico";
import "./styles/main.scss";

// init Sentry
if (process.env.SENTRY_DSN) {
    try {
        Sentry.init({ dsn: process.env.SENTRY_DSN });
    } catch (error) {
        console.log("failed to init Senetry with error: ", error);
    }
}

// Use BrowserRouter if your are going to use URL without hash
render(
    <BrowserRouter basename={process.env.APP_PATH ? process.env.APP_PATH : "/"}>
        <App />
    </BrowserRouter>,
    document.getElementById("book-hotel") as HTMLElement
);

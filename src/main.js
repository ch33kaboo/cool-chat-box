import "./app.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import App from "./App.svelte";

const app = new App({
  target: document.body,
});

export default app;

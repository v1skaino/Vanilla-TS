import { Router } from "./shared/routes/routes";
import "./shared/theme/global.style.css";
import {
  setupContentLoadedListener,
  setupPopStateListener,
} from "./shared/utils/setupListeners";

const container = document.getElementById("app");
const router = new Router(container!);

const initializeApp = () => {
  const path = window.location.pathname;
  setupPopStateListener(() => router.navigateToPath(path));
  router.navigateToPath(path);
};

setupContentLoadedListener(initializeApp);

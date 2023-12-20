import { Router } from "./shared/routes/routes";
import {
  setupContentLoadedListener,
  setupPopStateListener,
} from "./shared/utils/setupListeners";

const container = document.getElementById("app");
const router = new Router(container!);

const initializeApp = () => {
  setupPopStateListener(() => {
    const path = window.location.pathname;
    router.navigateToPath(path);
  });

  navigateToCurrentRoute();
};

const navigateToCurrentRoute = () => {
  const path = window.location.pathname;
  router.navigateToPath(path);
};

const navigateTo = (url: string) => {
  window.history.pushState({}, "", url);
  router.navigateToPath(url);
};

setupContentLoadedListener(initializeApp);
navigateTo("/home");

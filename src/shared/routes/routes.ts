import { HomeController } from "../../views/home/controller";

export class Router {
  private controllers: Record<RouterModel, any>;

  constructor(container: HTMLElement) {
    this.controllers = {
      "/home": new HomeController(container),
    };
  }

  public navigateToPath(path: string): void {
    const controller = this.controllers[path as RouterModel];

    if (!controller) {
      return console.error(`Controller not found for path: ${path}`);
    }

    window.history.pushState({}, "", path);
    controller.render();
  }
}

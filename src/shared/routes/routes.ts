import { HomeController } from "../../modules/home/controller";

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
      if (path === "/") return this.navigateToPath("/home");
      return console.error(`Controller not found for path: ${path}`);
    }

    window.history.pushState({}, "", path);
    controller.render();
  }
}

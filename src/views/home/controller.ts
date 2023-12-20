import { HomeModel } from "./model";
import { HomeView } from "./view";

export class HomeController {
  private view: HomeView;
  private model: HomeModel;

  constructor(container: HTMLElement) {
    this.model = {
      state: {
        user: {
          name: "John Doe",
          email: "",
        },
      },
      methods: {
        updateUserName: this.updateUserName.bind(this),
      },
    };

    this.view = new HomeView(container);
  }

  public render(): void {
    console.log("Home Screen Loaded");
    this.view.render(this.model);
  }

  public updateUserName(): void {
    this.model.state.user.name = "John Doeeeee";
    this.view.render(this.model);
  }
}

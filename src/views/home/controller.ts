import { generate } from "gerador-validador-cpf";
import { ToastComponent } from "../../shared/components/toast/toast";
import { HomeModel } from "./model";
import { HomeView } from "./view";

export class HomeController {
  private view: HomeView;
  private model: HomeModel;
  private toast: ToastComponent | undefined;

  constructor(container: HTMLElement) {
    this.model = {
      state: {
        cpf: generate({ format: true }),
      },
      methods: {
        generateCpf: this.generateCpf.bind(this),
        copyToClipBoard: this.copyToClipBoard.bind(this),
      },
    };
    this.view = new HomeView(container);
  }

  public render(): void {
    console.log("Home Screen Loaded");
    this.view.render(this.model);
    this.toast = new ToastComponent();
  }

  public copyToClipBoard(): void {
    navigator.clipboard.writeText(this.model.state.cpf);
    this.toast?.showToast("Copiado para a área de transferência");
  }

  public generateCpf(): void {
    this.model.state.cpf = generate({ format: true });
    this.view.render(this.model);
  }
}

import copy_paste_icon from "../../shared/assets/icon_copy_paste.png";
import { ButtonComponent } from "../../shared/components/button/button";
import { InputComponent } from "../../shared/components/input/input";
import { baseTemplate } from "../../shared/templates/base/base";
import { setupClickListener } from "../../shared/utils/setupListeners";
import { HomeModel } from "./model";
import "./style.css";
export class HomeView {
  private container: HTMLElement;
  private input: InputComponent = new InputComponent();
  private button: ButtonComponent = new ButtonComponent();

  constructor(container: HTMLElement) {
    this.container = container;
  }

  setupEvents(methods: HomeModel["methods"]): void {
    const setup = this.container;
    setupClickListener(setup, "generateCPF_btn", methods.generateCpf);
    setupClickListener(setup, "cpf_input_icon", methods.copyToClipBoard);
  }

  render({ state, methods }: HomeModel): void {
    const { cpf } = state;

    this.container.innerHTML = baseTemplate(/*html*/ `
    <main class="container">   
      ${this.input.render({
        id: "cpf_input",
        value: cpf,
        icon: copy_paste_icon,
        readonly: true,
      })}
     ${this.button.render({
       id: "generateCPF_btn",
       label: "Gerar CPF",
     })}
    </main>
  `);

    this.setupEvents(methods);
  }
}

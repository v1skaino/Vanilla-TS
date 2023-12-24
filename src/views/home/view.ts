import copy_paste_icon from "../../shared/assets/icon_copy_paste.png";
import { InputComponent } from "../../shared/components/input/input";
import { baseTemplate } from "../../shared/templates/base/base";
import { setupClickListener } from "../../shared/utils/setupListeners";
import { HomeModel } from "./model";
import "./style.css";
export class HomeView {
  private container: HTMLElement;
  private input: InputComponent = new InputComponent();

  constructor(container: HTMLElement) {
    this.container = container;
  }

  setupEvents(methods: HomeModel["methods"]): void {
    const setup = this.container;
    setupClickListener(setup, "updateUserNameBtn", methods.updateUserName);
    setupClickListener(setup, "cpf_input_icon", methods.updateUserName);
  }

  render({ state, methods }: HomeModel): void {
    const { user } = state;

    this.container.innerHTML = baseTemplate(/*html*/ `
    <main class="container">   
      ${this.input.render({
        id: "cpf_input",
        value: user.name,
        icon: copy_paste_icon,
      })}
      <button id="updateUserNameBtn">Update User Name</button>
    </main>
  `);

    this.setupEvents(methods);
  }
}

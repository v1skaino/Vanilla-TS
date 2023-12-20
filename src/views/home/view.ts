import { baseTemplate } from "../../shared/templates/base/base";
import { setupClickListener } from "../../shared/utils/setupListeners";
import { HomeModel } from "./model";

export class HomeView {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  setupEvents(methods: HomeModel["methods"]): void {
    const setup = this.container;
    setupClickListener(setup, "updateUserNameBtn", methods.updateUserName);
  }

  render({ state, methods }: HomeModel): void {
    const { user } = state;

    this.container.innerHTML = baseTemplate(/*html*/ `
    <header>
      <h1>Hello, ${user.name}!</h1>
    </header>
    <main>
      <h1>Olá</h1>
      <button id="updateUserNameBtn">Update User Name</button>
    </main>
    <footer>
      <!-- Rodapé comum a todas as páginas -->
    </footer>
  `);

    this.setupEvents(methods);
  }
}

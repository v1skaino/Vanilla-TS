import { setupProps } from "../../utils/setupListeners";
import "./style.css";

export class ButtonComponent {
  render({ label, ...rest }: ButtonComponentProps): string {
    return /*html*/ `<button class="btn_primary" ${setupProps(
      rest,
    )} >${label}</button>`;
  }
}

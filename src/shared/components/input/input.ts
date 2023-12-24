import { setupProps } from "../../utils/setupListeners";
import "./style.css";

export class InputComponent {
  render({ label, icon, id, ...rest }: InputComponentProps): string {
    const inputLabel = `<label>${label}</label>`;
    const inputIcon = `<img src="${icon}" alt="action_icon" id="${
      id + "_icon"
    }"/>`;

    return /*html*/ `
      <div class="input_wrapper" id=${id}> 
        ${label ? inputLabel : ""}
        <div class="input_wrapper_row">
          <input ${setupProps(rest)} />
          ${icon ? inputIcon : ""}
        </div>
      </div>
    `;
  }
}

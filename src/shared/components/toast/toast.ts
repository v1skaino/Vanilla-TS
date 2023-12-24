import "./style.css";

export class ToastComponent {
  private container: HTMLElement;

  constructor() {
    this.container = document.getElementById("toastContainer")!;
  }

  private createToast(message: string): HTMLElement {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    return toast;
  }

  public showToast(message: string, duration: number = 3000): void {
    const toast = this.createToast(message);
    this.container.appendChild(toast);
    this.container.style.display = "block";

    setTimeout(() => {
      this.container.removeChild(toast);
      if (this.container.childElementCount !== 0) return;
      this.container.style.display = "none";
    }, duration);
  }
}

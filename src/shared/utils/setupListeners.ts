const setupClickListener = (
  container: HTMLElement,
  id: string,
  callBack: () => void,
) => {
  const querySelector = container.querySelector.bind(container);
  querySelector("#" + id)?.addEventListener("click", () => callBack());
};

const setupContentLoadedListener = (callBack: () => void) => {
  document.addEventListener("DOMContentLoaded", () => callBack());
};

const setupPopStateListener = (callBack: () => void) => {
  window.addEventListener("popstate", () => callBack());
};

export {
  setupClickListener,
  setupContentLoadedListener,
  setupPopStateListener,
};

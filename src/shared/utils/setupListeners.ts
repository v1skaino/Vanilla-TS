const setupClickListener = (
  container: HTMLElement,
  id: string,
  callBack: () => void,
) => {
  const querySelector = container.querySelector.bind(container);
  querySelector("#" + id)?.addEventListener("click", () => callBack());
};

const setupInputListener = (
  container: HTMLElement,
  id: string,
  callBack: () => void,
) => {
  const querySelector = container.querySelector.bind(container);
  querySelector("#" + id)?.addEventListener("input", () => callBack());
};

const setupContentLoadedListener = (callBack: () => void) => {
  document.addEventListener("DOMContentLoaded", () => callBack());
};

const setupPopStateListener = (callBack: () => void) => {
  window.addEventListener("popstate", () => callBack());
};

const setupProps = (props: object) => {
  return Object.entries(props)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");
};

export {
  setupClickListener,
  setupContentLoadedListener,
  setupInputListener,
  setupPopStateListener,
  setupProps,
};

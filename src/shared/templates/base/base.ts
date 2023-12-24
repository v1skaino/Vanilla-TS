export const baseTemplate = (content: string) => /*html*/ `
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generator</title>
  </head>
  <body>
    <div id="toastContainer"></div>
    ${content}
  </body>
  </html>
`;

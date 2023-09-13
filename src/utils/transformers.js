export function componentPreviewHtml(componentHtml) {
  return `
      <html>
        <head>
          <link rel="stylesheet" href="/components.css">

          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        </head>

        <body class="font-sans antialiased p-4">
          ${componentHtml}
        </body>
      </html>
    `
}

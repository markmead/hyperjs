export function componentPreviewHtml(componentHtml) {
  return `
      <html>
        <head>
          <link rel="stylesheet" href="/components.css">

          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

          <!--
          <script defer src="https://unpkg.com/@alpinejs/mask@latest/dist/cdn.min.js"></script>
          <script defer src="https://unpkg.com/@alpinejs/collapse@latest/dist/cdn.min.js"></script>
          <script defer src="https://unpkg.com/@alpinejs/persist@latest/dist/cdn.min.js"></script>

          <script defer src="https://unpkg.com/alpinejs-tash@latest/dist/tash.min.js"></script>
          <script defer src="https://unpkg.com/alpinejs-head@latest/dist/head.min.js"></script>
          <script defer src="https://unpkg.com/alpinejs-emit@latest/dist/emit.min.js"></script>
          <script defer src="https://unpkg.com/alpinejs-manage@latest/dist/manage.min.js"></script>
          <script defer src="https://unpkg.com/alpinejs-character-count@latest/dist/count.min.js"></script>
          <script defer src="https://unpkg.com/alpinejs-form-validation@latest/dist/validation.min.js"></script>
          <script defer src="https://unpkg.com/alpinejs-form-captcha@latest/dist/captcha.min.js"></script>
          <script defer src="https://unpkg.com/alpinejs-cursor@latest/dist/cursor.min.js"></script>
          <script defer src="https://unpkg.com/alpinejs-notify@latest/dist/notify.min.js"></script>
          <script defer src="https://unpkg.com/alpinejs-sort@latest/dist/sort.min.js"></script>
          <script defer src="https://unpkg.com/alpinejs-form-data@latest/dist/form-data.min.js"></script>
          <script defer src="https://unpkg.com/alpinejs-scroll-amount@latest/dist/scroll-amount.min.js"></script>
          <script defer src="https://unpkg.com/alpinejs-masonry@latest/dist/masonry.min.js"></script>
          <script defer src="https://unpkg.com/alpinejs-persist-extended@latest/dist/storage.min.js"></script>
          <script defer src="https://unpkg.com/alpinejs-money@latest/dist/money.min.js"></script>
          <script defer src="https://unpkg.com/alpinejs-sticky@latest/dist/sticky.min.js"></script>
          <script defer src="https://unpkg.com/alpinejs-slug@latest/dist/slug.min.js"></script>
          <script defer src="https://unpkg.com/alpinejs-textarea-grow@latest/dist/grow.min.js"></script>
          <script defer src="https://unpkg.com/alpinejs-overlap@latest/dist/overlap.min.js"></script>

          <script defer src="https://unpkg.com/alpinejs@latest/dist/cdn.min.js" ></script>

          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" />
          <link rel="stylesheet" type="text/css" href="https://npmcdn.com/flatpickr/dist/themes/dark.css" />
          -->
        </head>

        <body class="font-sans antialiased p-4">
          ${componentHtml}
        </body>
      </html>
    `
}

export function componentPreviewHtml(componentHtml) {
  return `
      <html>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" />

          <script src="https://cdn.tailwindcss.com?plugins=forms"></script>

          <script>
            tailwind.config = {
              theme: {
                extend: {
                  animation: {
                    'slide-in': 'slide-in 0.15s ease-in forwards',
                    'slide-out': 'slide-out 0.15s ease-in forwards',
                  },
                  keyframes: {
                    'slide-in': {
                      '0%': { transform: 'translateX(100%)' },
                      '100%': { transform: 'translateX(0)' },
                    },
                    'slide-out': {
                      '0%': { transform: 'translateX(0)' },
                      '100%': { transform: 'translateX(100%)' },
                    },
                  },
                },
              },
            }
          </script>
        </head>

        <body class="font-sans antialiased p-4">
          ${componentHtml}
        </body>
      </html>
    `
}

export default function Layout({ children }) {
  return (
    <main>
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-12 sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  );
}

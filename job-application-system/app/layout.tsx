import './styles/globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header className="p-4 bg-gray-800 text-white">Job Application System</header>
        <main>{children}</main>
        <footer className="p-4 bg-gray-800 text-white text-center">© 2024</footer>
      </body>
    </html>
  );
}

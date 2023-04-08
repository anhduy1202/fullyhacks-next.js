export const metadata = {
  title: "fullynote",
  description: "note for everyone",
};
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className="layout">{children}</body>
    </html>
  );
}

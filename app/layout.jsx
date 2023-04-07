export const metadata = {
  title: "fullynote",
  description: "note for everyone",
};
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className="bg-orange-100 font-rubik text-lg m-10 w-[100vw] h-[100vh]">
        {children}
      </body>
    </html>
  );
}

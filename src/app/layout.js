import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'


const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({
  src: '../../public/fonts/fonts/Satoshi-Variable.woff2',

  display: 'swap',
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}

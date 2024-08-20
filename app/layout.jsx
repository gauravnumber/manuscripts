// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Manuscripts",
  description: "Unlock the power of anonymous sharing with our platform. Share valuable life lessons, expert advice, or personal insights without revealing your identity. Contribute to a community eager for guidance while maintaining your privacy. Make a meaningful impact with your knowledge today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}

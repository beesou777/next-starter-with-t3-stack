import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "~/components/common/footer";
import { Navbar } from "~/components/common/navbar";

export const metadata: Metadata = {
  title: "Event Booking",
  description: "Book your event from evently book",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Navbar/>
        {children}
        <ToastContainer />
        <Footer/>
        </body>
    </html>
  );
}

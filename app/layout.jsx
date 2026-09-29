import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Study in the Philippines | Find your next chapter",
  description:
    "Explore courses, universities, student life and practical study information for the Philippines, with clear reminders to verify official requirements.",
  openGraph: {
    title: "Study in the Philippines",
    description: "A considered guide to studying, living and finding your next chapter in the Philippines.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

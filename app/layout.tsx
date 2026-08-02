import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A+ Credit Restoration | Credit Education & Report Review",
  description: "Credit education, report review, factual dispute-document support, consumer resources, and realistic action planning from A+ Techucation LLC.",
  icons: { icon: "/atechucation-logo-enhanced.png" },
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body>{children}</body></html>;
}

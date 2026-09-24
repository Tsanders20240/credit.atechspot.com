import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A+ Credit Education Center | Free Reports, Rights & Planning Tools",
  description: "Free credit education, report guidance, consumer rights and on-device planning tools from A+ Techucation LLC. No paid credit-repair service or score promise.",
  icons: { icon: "/atechucation-logo-enhanced.png" },
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body>{children}</body></html>;
}

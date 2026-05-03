import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Build Lasting Global Ties | Naila Exim",
  description: "Get in touch with Naila Exim for bulk export requirements, trade consulting, or sourcing from Indian farmers. We're here to help.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

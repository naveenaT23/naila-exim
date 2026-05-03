import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process | Seamless Global Trade & Logistics | Naila Exim",
  description: "Learn about our transparent supply chain, direct-from-farmer sourcing, and strategic port access in South India.",
};

export default function ExportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

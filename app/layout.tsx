import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AnalyticsClient from "@/components/Analatyics/AnalyticsClient";
import Layout from "@/components/Layout";
import { Toaster } from "@/components/ui/toaster";
export const metadata = {
  title: "Jema.ai",
  description:
    "Uses ChatGPT API to create almost any text based output for your need - from marketing content to blog post ideas and a lot more. It uses simple template based components to ask ChatGPT for generating results Creating new templates or tasks take about 30 mins. no more, so you can extend it for your needs or wait for new template release :)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AnalyticsClient />
        <Layout title="">{children}</Layout>
        <Toaster />
      </body>
    </html>
  );
}

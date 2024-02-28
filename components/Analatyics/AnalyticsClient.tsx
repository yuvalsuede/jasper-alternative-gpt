"use client";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { Analytics } from "@vercel/analytics/react";
import { ReactElement } from "react";

interface Props {}

export default function AnalyticsClient({}: Props): ReactElement {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Analytics />
    </>
  );
}

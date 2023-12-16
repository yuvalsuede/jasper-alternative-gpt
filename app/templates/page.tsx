import React, { ReactElement } from "react";
import { redirect } from "next/navigation";
interface Props {}

export default function Page({}: Props): ReactElement {
  redirect("/");
  return <div></div>;
}

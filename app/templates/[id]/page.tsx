"use client";
import { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import { TEMPLATES } from "../../../constants/templates";
import InputOutputComponent from "../../../components/InputOutputComponent";

const TemplatePage = ({ params }: { params: { id: string } }) => {
  const [template, setTemplate] = useState<(typeof TEMPLATES)[number] | null>();
  const id = params.id;

  useEffect(() => {
    if (id) {
      const selectedTemplate = TEMPLATES.find((t) => t.id === id);
      setTemplate(selectedTemplate);
    }
  }, [id]);

  if (!template) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title="">
      <InputOutputComponent template={template} />
    </Layout>
  );
};

export default TemplatePage;

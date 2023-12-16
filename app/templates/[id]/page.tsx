import Layout from "../../../components/Layout";
import { TEMPLATES } from "../../../constants/templates";
import InputOutputComponent from "../../../components/InputOutputComponent";

export async function generateStaticParams() {
  return TEMPLATES.map((template) => ({
    params: {
      id: template.id,
    },
  }));
}

export default function TemplatePage({ params }: { params: { id: string } }) {
  const id = params.id;
  const template = TEMPLATES.find((t) => t.id === id);

  if (!template) {
    return <div>Loading...</div>;
  }
  return <InputOutputComponent template={template} />;
}

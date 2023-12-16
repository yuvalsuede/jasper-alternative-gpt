import { TEMPLATES } from "../../../constants/templates";
import InputOutputComponent from "../../../components/InputAndOutputSection/InputOutputComponent";

type Props = { params: { id: string } };

export async function generateStaticParams() {
  return TEMPLATES.map((template) => ({
    params: {
      id: template.id,
    },
  }));
}
export async function generateMetadata({ params }: Props) {
  const id = params.id;
  const template = TEMPLATES.find((t) => t.id === id);
  return { title: template?.title, description: template?.description };
}

export default function TemplatePage({ params }: Props) {
  const id = params.id;
  const template = TEMPLATES.find((t) => t.id === id);

  if (!template) {
    return (
      <div className=" h-full w-full grid place-items-center p-4">
        <div className="max-w-2xl bg-slate-100 text-bold p-16 font-sans border border-black rounded-lg">
          Not such page found
        </div>
      </div>
    );
  }

  return <InputOutputComponent template={template} />;
}

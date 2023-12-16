import { TemplateInput } from "@/constants/templates";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
type HandleChange = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void;
interface Props {
  input: TemplateInput;
  value: string;
  handleChange: HandleChange;
}
export default function RenderCorrectInputField({
  input,
  value,
  handleChange,
}: Props) {
  if (input.type === "textarea") {
    return (
      <Textarea
        id={input.id}
        value={value}
        onChange={handleChange}
        className="w-full p-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-lg"
        placeholder={input.placeholder}
        rows={4}
        maxLength={800}
      />
    );
  } else if (input.type === "text") {
    return (
      <Input
        maxLength={300}
        type="text"
        id={input.id}
        value={value}
        onChange={handleChange}
        className="w-full p-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-lg"
        placeholder={input.placeholder}
      />
    );
  } else {
    return <></>;
  }
}

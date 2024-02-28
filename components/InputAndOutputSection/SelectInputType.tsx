import { LANGUAGES, TemplateInput } from "@/constants/templates";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface Props {
  input: TemplateInput;
  value: string;
  setInputData: React.Dispatch<
    React.SetStateAction<{
      [key: string]: string;
    }>
  >;
}
export default function RenderCorrectInputField({
  input,
  value,
  setInputData,
}: Props) {
  const handleChange = (e: any) => {
    setInputData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleSelect = (value: string) => {
    setInputData((prev) => ({ ...prev, language: value }));
  };

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
  } else if (input.type === "select") {
    return (
      <>
        <Select onValueChange={handleSelect}>
          <SelectTrigger className="w-full mt-2">
            <SelectValue placeholder={input.placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Languages</SelectLabel>
              {LANGUAGES.map((language: string) => {
                return (
                  <SelectItem key={language} value={language.toLowerCase()}>
                    {language}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </>
    );
  } else {
    return <></>;
  }
}

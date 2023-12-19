import React from "react";
import { Output } from "./InputOutputComponent";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Copy from "../ui/Logos/Copy";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface OutputComponentProps {
  generatedOutput: Output | undefined;
  onClearOutput: () => void;
  errorMessage: string | null;
}

const OutputComponent: React.FC<OutputComponentProps> = ({
  generatedOutput,
  onClearOutput,
  errorMessage,
}) => {
  // Display toast message if error occurs
  const { toast } = useToast();
  if (errorMessage !== null) {
    toast({
      title: "Something went wrong",
      description: errorMessage,
      variant: "destructive",
    });
  }

  return (
    <div className="w-full lg:w-1/2">
      <OutputHeader
        onClearOutput={onClearOutput}
        generatedOutput={generatedOutput}
      ></OutputHeader>

      <div className="w-full text-gray-900 bg-white space-y-4 p-2">
        {/* Displaying all the output(which is in the form of list) */}
        {generatedOutput &&
          generatedOutput.result.map((answer, index) => (
            <Card
              key={index}
              className="py-3 group relative px-3 border-b border-gray-200 group shadow-black shadow-sm rounded-md cursor-pointer bg-green-50 hover:bg-green-300/5"
            >
              <CopyButton answer={answer}></CopyButton>
              <CardContent className="w-full mt-2 mb-3 text-base font-medium leading-7 text-gray-800 whitespace-pre-wrap pre">
                {index + 1}. {answer}
              </CardContent>
            </Card>
          ))}

        {generatedOutput === undefined && <PlaceholderCard />}
      </div>
    </div>
  );
};

function CopyButton({ answer }: { answer: string }) {
  const { toast } = useToast();

  const copyTextToClipboard = async (answer: string) => {
    try {
      await navigator.clipboard.writeText(answer);
      toast({
        title: "Text Copied to Clipboard",
        duration: 3000,
      });
    } catch (err) {
      toast({
        title: "Failed to copy text",
        variant: "destructive",
      });
    }
  };
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className="cursor-pointer absolute opacity-0 group-hover:opacity-100 top-2 right-2 h-6 w-6 bg-transparent hover:bg-gray-300 p-1 rounded-sm transition-all duration-150 text-gray-500"
              onClick={() => copyTextToClipboard(answer)}
            >
              <Copy></Copy>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Copy Text to clipboard</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}

function PlaceholderCard() {
  return (
    <Card className="w-4/5 mx-auto mt-12 text-gray-900 bg-white border border-gray-200 p-4 rounded-md shadow-sm flex items-center justify-center">
      <CardHeader className="text-lg font-normal text-gray-300">
        <CardTitle>No output generated yet.</CardTitle>
      </CardHeader>
    </Card>
  );
}

type OutputHeaderProps = {
  generatedOutput: Output | undefined;
  onClearOutput: () => void;
};
function OutputHeader({ generatedOutput, onClearOutput }: OutputHeaderProps) {
  return (
    <header className="xl:sticky xl:z-10 top-0 flex items-center px-3 py-1 bg-white border-b border-gray-200">
      <div className="flex flex-grow py-1 space-x-3">
        <Badge className="relative border-none outline-none transition-all duration-150 before:transition-all before:duration-150 before:absolute before:inset-0 whitespace-nowrap py-3 px-3 text-xs font-medium before:bg-gray-100 before:rounded-lg before:scale-100 before:opacity-100 text-blue-700">
          <span className="relative">
            New outputs{" "}
            <span className="px-2 py-1 ml-2 text-xs rounded-full bg-white">
              {generatedOutput?.result.length || 0}
            </span>
          </span>
        </Badge>
      </div>

      <Button
        onClick={onClearOutput}
        className="relative bg-white hover:bg-transparent transition-all duration-150 before:transition-all before:duration-150 before:absolute before:inset-0 px-3 py-2 text-xs font-medium leading-4 text-gray-400 hover:text-gray-600 before:bg-gray-100 before:rounded-lg before:scale-50 before:opacity-0 hover:before:scale-100 hover:before:opacity-100"
      >
        <span className="relative">Clear</span>
      </Button>
    </header>
  );
}
export default OutputComponent;

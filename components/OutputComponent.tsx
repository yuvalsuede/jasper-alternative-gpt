import React, {useState} from 'react';
import Toast from "./Toast";

interface OutputComponentProps {
    generatedOutput: string;
    onClearOutput: () => void;
}

const OutputComponent: React.FC<OutputComponentProps> = ({generatedOutput, onClearOutput}) => {
    const [toastVisible, setToastVisible] = useState(false);

    const copyTextToClipboard = async (answer: string) => {
        try {
            await navigator.clipboard.writeText(answer);
            setToastVisible(true);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const handleToastDismiss = () => {
        setToastVisible(false);
    };

    const splitOutput = (output: string): string[] => {
        const patterns = ['___', '\\d\\.', '\\d\\)', '\\bOption\\s*\\d', '\\boption\\s*\\d', '\\bOutput\\s*\\d', '\\boutput\\s*\\d'];
        for (const pattern of patterns) {
            const regex = new RegExp(pattern, 'g');
            const matches = output.split(regex);
            if (matches.length > 1) {
                return matches.map(match => match.trim()).filter(match => match.length > 0);
            }
        }
        return [output];
    };

    const outputs = splitOutput(generatedOutput);


    return (
        <div className="w-full lg:w-1/2">
            <div className="xl:sticky xl:z-10 top-0 flex items-center px-3 bg-white border-b border-gray-200">
                <nav className="flex flex-grow py-1 space-x-3" aria-label="Tabs">
                    <button
                        className="relative transition-all duration-150 before:transition-all before:duration-150 before:absolute before:inset-0 whitespace-nowrap py-2 px-3 text-xs font-medium before:bg-gray-100 before:rounded-lg before:scale-100 before:opacity-100 text-blue-700">
            <span className="relative">
              New outputs{" "}
                <span className="px-2 py-1 ml-2 text-xs rounded-full bg-white">
                {outputs.length}
              </span>
            </span>
                    </button>
                    {/* ... other buttons, if needed */}
                </nav>
                <div>
                    <button
                        onClick={onClearOutput}
                        className="relative transition-all duration-150 before:transition-all before:duration-150 before:absolute before:inset-0 px-3 py-2 text-xs font-medium leading-4 text-gray-400 hover:text-gray-600 before:bg-gray-100 before:rounded-lg before:scale-50 before:opacity-0 hover:before:scale-100 hover:before:opacity-100"
                    >
                        <span className="relative">Clear</span>
                    </button>
                </div>
            </div>
            <div className="w-full text-gray-900 bg-white">
                {generatedOutput ? (
                    <>
                        {outputs.map((answer, index) => (
                            <div key={index}
                                 className="py-3 px-3 border-b border-gray-200 group cursor-pointer bg-green-50 hover:bg-green-300/5">
                                <div className="flex items-center space-x-2">
                                    {/* Your action buttons */}
                                </div>
                                <div
                                    className="w-full mt-2 mb-3 text-base font-medium leading-7 text-gray-800 whitespace-pre-wrap pre"
                                    onClick={() => copyTextToClipboard(answer)}

                                >
                                    {answer}
                                    {toastVisible && <Toast message="Text copied to clipboard!" duration={3000}
                                                            onDismiss={handleToastDismiss}/>}

                                </div>

                            </div>
                        ))}

                    </>
                ) : (
                    <div
                        className="w-4/5 mx-auto mt-12 text-gray-900 bg-white border border-gray-200 p-4 rounded-md shadow-sm flex items-center justify-center">
                        <span className="text-lg font-normal text-gray-200">No output generated yet.</span>
                    </div>


                )}
            </div>
        </div>
    );
};

export default OutputComponent;

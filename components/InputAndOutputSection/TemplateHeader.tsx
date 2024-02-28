// components/TemplateHeader.tsx

import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
interface TemplateHeaderProps {
  title: string;
  icon: string;
  description: string;
}

const TemplateHeader: React.FC<TemplateHeaderProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <Card className="sticky top-0 ">
      <div className="flex items-center px-6 py-4 bg-white border-b border-gray-200 z-10">
        <div className="mr-6">
          <div className="flex items-center justify-center w-10 h-10 text-gray-500">
            <div className="flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-xl ring-2 ring-offset-2 ring-gray-100 group-hover:ring-gray-200 group-focus:ring-gray-300 group-hover:bg-white">
              <span dangerouslySetInnerHTML={{ __html: icon }} />
            </div>
          </div>
        </div>

        <div>
          <CardTitle className="text-xl font-bold leading-7 text-gray-900 sm:truncate">
            {title}
          </CardTitle>
          <CardDescription className="w-full text-sm text-gray-500">
            {description}
          </CardDescription>
        </div>
      </div>
    </Card>
  );
};

export default TemplateHeader;

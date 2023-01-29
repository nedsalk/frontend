import { IconBack } from "icons";
import React from "react";

const RightMenu = ({ children, title, className, footer, onBack }: { children: React.ReactNode; title: string; className?: string; footer?: JSX.Element; onBack: any }) => {
  return (
    <div className={`flex flex-col border-l border-gray transition-all duration-1000 ease-in-out ${className}`}>
      <div className="flex border-b border-gray text-white p-5 text-head5 gap-x-5">
        <IconBack width="32px" height="32px" onClick={onBack} className="cursor-pointer" />
        {title}
      </div>
      <div className="flex flex-col px-10 py-5 gap-y-5 overflow-y-scroll no-scrollbar">{children}</div>

      {footer && <div className="sticky bottom-0 mt-auto w-full border-t border-gray bg-bg">{footer}</div>}
    </div>
  );
};

export default RightMenu;
import React from "react";
import Label from "./Label";
import HelperText from "./HelperText";
import clsx from "clsx";
import { IconDiscord, IconSocial3Dots, IconTwitter, IconWeblink } from "../../../../../icons";
import Input from "./Input";
import { SocialTypes } from "../../../../../api/collections/collections.type";

const InputLabel = ({ className, containerClassName, icon, children, ...etc }: any) => {
  return (
    <div className={clsx("input-container flex flex-row items-center gap-2 px-4", "w-full lg:border lg:h-12 lg:rounded lg:border-gray", containerClassName)}>
      <label className={clsx("input flex items-center", "peer", className)} {...etc}>
        {children}
      </label>
      {icon}
    </div>
  );
};
const Socials = ({ value }: any) => {
  const webSite = value.find((val: any) => val.type === SocialTypes.Website);
  const socialTypes = [
    {
      text: "Connect Twitter",
      type: SocialTypes.Twitter,
      icon: IconTwitter,
    },
    {
      text: "Connect Discord",
      type: SocialTypes.Discord,
      icon: IconDiscord,
    },
    {
      text: "Connect Medium",
      type: SocialTypes.Medium,
      icon: IconSocial3Dots,
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-2">
        <Label>Social</Label>
        <HelperText>Connect your social account to help collectors verfiying you.</HelperText>
        <div className="flex flex-col gap-2">
          {socialTypes.map((socialType) => {
            const Icon = socialType.icon;
            const foundValue = value.find((val: any) => val.type === socialType.type);

            return (
              <InputLabel
                key={socialType.type}
                className={clsx(!foundValue?.url ? "underline cursor-pointer" : "")}
                icon={<Icon className={clsx(foundValue?.url ? "text-white" : "text-gray-light")} />}
              >
                {foundValue?.url ?? socialType.text}
              </InputLabel>
            );
          })}
        </div>
      </div>
      <Input label="Website" placeholder="yourwebsite.io" value={webSite?.url} icon={<IconWeblink className="text-gray-light" />} />
    </>
  );
};

export default Socials;
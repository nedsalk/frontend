import React from "react";

import "./Sidebar.css";
import { IconQuarry } from "icons";
import { numberFormat } from "utils";
import LogoContainer from "./components/LogoContainer";
import { Box, BoxWithIcon } from "./components/Box";
import CoverImage from "./components/CoverImage";
import { ButtonEdit, ButtonFollow } from "./components/Buttons";
import { FollowType, useProfile } from "../../ProfileContext";

const Sidebar = ({ isProfile = false }: any) => {
  const { userInfo, onSetSocialActiveTab } = useProfile();

  return (
    <div className="flex flex-col border-r border-gray min-w-[500px] max-w-[500px]">
      <div className="sidebar-container">
        {isProfile ? <ButtonEdit /> : <ButtonFollow />}
        <CoverImage />
        <div className="p-10 relative pt-[150px] text-white w-full h-full flex">
          <div className="flex flex-col w-full">
            <LogoContainer userInfo={userInfo} />
            <div className="body-medium mt-5">{userInfo?.bio}</div>
            <div className="grid grid-cols-2 gap-2 mt-5">
              <Box
                header="followers"
                onClick={() => {
                  onSetSocialActiveTab(FollowType.Followers);
                }}
              >
                {numberFormat(userInfo?.followers?.length)}
              </Box>
              <Box
                header="FOLLOWING"
                onClick={() => {
                  onSetSocialActiveTab(FollowType.Follows);
                }}
              >
                {numberFormat(userInfo?.follows?.length)}
              </Box>
            </div>
            <div className="grid flex-1 grid-cols-2 gap-2 mt-2">
              <Box header="lısted/owned" className="justify-between">
                {numberFormat(userInfo?.tokens?.length)}
              </Box>
              <Box header="created" className="justify-between">
                {numberFormat(userInfo?.tokens?.length)}
              </Box>
            </div>
            <BoxWithIcon icon={IconQuarry} className="mt-2">
              <div className="text-headline-01 text-gray-light uppercase">LAST offer</div>
              <h6 className="text-h6">0.99 ETH Bid placed by 09x910</h6>
            </BoxWithIcon>
            <BoxWithIcon icon={IconQuarry} className="mt-2">
              <div className="text-headline-01 text-gray-light uppercase">LAST ACTIVITY</div>
              <h6 className="text-h6">Minted CloneX #2750</h6>
            </BoxWithIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React, { Dispatch, SetStateAction } from "react";
import { Link, useNavigate } from "react-router-dom";
import clsx from "clsx";

import { AssetLogo, AssetThunderText } from "assets";
import { IconCart, IconEthereum, IconGas, IconHamburger, IconInfo, IconSearch, IconThunder2, IconWallet } from "icons";

import Tab from "components/Tab";
import SocialMediaIcons from "components/SocialMediaIcons";

import Search from "./components/Search/Search";

import "./Header.css";
import { useAppDispatch, useAppSelector } from "store";
import { onToggle } from "store/mobileSearchSlice";
import MobileSearch from "./components/Search/MobileSearch";
import { toggleCartModal } from "store/cartSlice";
import { toggleWalletModal } from "store/walletSlice";
import { PATHS } from "router/config/paths";
import { useIsMobile } from "hooks/useIsMobile";
import { EtherscanURL } from "api";

const ETHERSCAN_API_KEY = "9HA67PGY65RQS9Z6TETRT3EC6KQ6IGAH9V";

const HeaderTop = React.memo(() => {
  const [gasFee, setGasFee] = React.useState<any>(0);
  const [ethPrice, setEthPrice] = React.useState(0);

  async function getGasFee() {
    await EtherscanURL.get("api", { params: { module: "gastracker", action: "gasoracle", apikey: ETHERSCAN_API_KEY } }).then((res) => setGasFee(res.result.SafeGasPrice));
  }
  async function getEthPrice() {
    await EtherscanURL.get("api", { params: { module: "stats", action: "ethprice", apikey: ETHERSCAN_API_KEY } }).then((res) => setEthPrice(res.result.ethusd));
  }
  React.useEffect(() => {
    getGasFee();
    getEthPrice();
    const interval = setInterval(() => {
      getGasFee();
      getEthPrice();
    }, 10 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid flex  items-center">
      <div className="flex items-center  gap-5 shrink-0 text-headlineSm font-bigShoulderDisplay uppercase">
        <span className="flex items-center">
          <IconEthereum color="#838383" />
          <span className="text-white">${ethPrice}</span>
        </span>
        <span className="flex items-center">
          <IconGas className="mr-[6px]" />
          <span className="text-white">{gasFee} GWEI</span>
        </span>
      </div>
      <div className="flex w-full pt-[6px] pb-[6px] items-center gap-x-[10px] border-l ml-[27px] border-gray pl-[15px] text-white">
        <IconInfo className="w-[18px] h-[18px]" />
        <span className="text-headlineSm font-spaceGrotesk normal-case">Thunder is currently in beta phase. All data and transactions are being conducted on the testnet</span>
      </div>
      <SocialMediaIcons />
    </div>
  );
});
HeaderTop.displayName = "HeaderTop";

const HeaderCardBadge = React.memo(({ count }: { count: number }) => {
  return <span className="font-spaceGrotesk font-bold bg-white flex-center text-black absolute rounded-full w-[22px] h-[22px] -top-1 -right-1 border-[2px] border-bg tracking-normal">{count}</span>;
});

HeaderCardBadge.displayName = "HeaderCardBadge";

const HeaderIconButtonGroup = React.memo(() => {
  const selectedCarts = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const { isConnected } = useAppSelector((state) => state.wallet);

  return (
    <div className="flex divide-x divide-gray border-l border-l-gray lg:border-l-0 lg:border-r lg:border-gray">
      <HeaderIconButton className="lg:hidden" onClick={() => dispatch(onToggle())}>
        <IconSearch />
      </HeaderIconButton>
      <HeaderIconButton className="hidden lg:flex" onClick={() => dispatch(toggleWalletModal())}>
        <IconWallet className={clsx("h-[30px] w-[30px]", isConnected ? "text-white" : "text-gray-light")} />
      </HeaderIconButton>
      <HeaderIconButton className="relative" onClick={() => dispatch(toggleCartModal())}>
        <div className="relative">
          <IconCart height="30px" width="30px" />
          {selectedCarts.length > 0 && <HeaderCardBadge count={selectedCarts.length} />}
        </div>
      </HeaderIconButton>
      <HeaderIconButton className="lg:hidden">
        <IconHamburger />
      </HeaderIconButton>
    </div>
  );
});

HeaderIconButtonGroup.displayName = "HeaderIconButtonGroup";

const HeaderIconButton = React.memo((props: any) => {
  return (
    <button className={clsx("header-btn", props.className)} onClick={props.onClick}>
      {props.children}
    </button>
  );
});
HeaderIconButton.displayName = "HeaderIconButton";

export interface HeaderProps {
  showCartModal: Dispatch<SetStateAction<boolean>>;
}

const Header = () => {
  const navigate = useNavigate();
  const onChange = (value: any) => {
    if (value) {
      navigate(value);
    }
  };

  return (
    <header id="layout-header" className="sticky top-0 bg-bg z-30">
      {!useIsMobile() ? (
        <>
          <HeaderTop />
          <div className="border-y border-gray">
            <div className="header-container-fluid">
              <div className="flex items-center gap-6 pr-6">
                <Link className="flex text-white gap-1" to={PATHS.MARKETPLACE}>
                  <IconThunder2 className="w-14" />
                  <img className="hidden lg:flex" src={AssetThunderText} alt={AssetThunderText} />
                </Link>

                <Search />

                <Tab initTab={1} className="hidden lg:flex" onChange={onChange}>
                  <Tab.Item id={PATHS.MARKETPLACE}>EXPLORE</Tab.Item>
                  <Tab.Item id={PATHS.RANKINGS}>COLLECTIONS</Tab.Item>
                  <Tab.Item id={null}>CREATE</Tab.Item>
                </Tab>
              </div>
              <HeaderIconButtonGroup />
            </div>
          </div>
          <MobileSearch />
        </>
      ) : (
        <div className="border-y border-gray">
          <div className="header-container-fluid">
            <div className="flex items-center py-5">
              <img src={AssetLogo} className="h-8" alt="logo" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

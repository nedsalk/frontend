import React, { useCallback, useRef } from "react";
import SocialMediaIcons from "components/SocialMediaIcons";
import etherscanService from "api/etherscan/etherscan.service";
import { IconCart, IconCollections, IconDrops, IconEthereum, IconGas, IconHome, IconMoon, IconSun, IconWallet, IconWalletConnect } from "icons";
import { useLocalStorage } from "hooks/useLocalStorage";
import { THUNDER_THEME_NAME } from "global-constants";
import { useIsMobile } from "hooks/useIsMobile";
import useNavigate from "hooks/useNavigate";
import { PATHS } from "router/config/paths";

import "./Footer.css";
import clsx from "clsx";
import { useAppSelector } from "store";
import Avatar from "components/Avatar";
import { useDispatch } from "react-redux";
import { toggleCartModal } from "store/cartSlice";

const IntervalValue = 600000;
const FooterBottom = React.memo(() => {
  const [isDarkMode, setIsDarkModa] = React.useState<boolean>(true);
  const [gasFee, setGasFee] = React.useState<any>(0);
  const [ethPrice, setEthPrice] = React.useState<any>(0);
  const { getItem, setItem } = useLocalStorage();
  const getData = useCallback(async () => {
    const response = await etherscanService.getData();

    setEthPrice(Number.parseFloat(response.result.ethusd).toFixed(2));
    setGasFee(response.result.safeGasPrice);
  }, []);

  const onChangeMode = () => {
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      setItem(THUNDER_THEME_NAME, "dark");
    } else {
      document.documentElement.classList.remove("dark");
      setItem(THUNDER_THEME_NAME, "light");
    }
    setIsDarkModa(!isDarkMode);
  };

  React.useEffect(() => {
    getData();
    const interval = setInterval(() => {
      getData();
    }, IntervalValue);

    setIsDarkModa(getItem(THUNDER_THEME_NAME) === "dark");

    return () => clearInterval(interval);
  }, [getData, getItem]);
  const Icon = isDarkMode ? IconSun : IconMoon;

  return (
    <div className="flex items-center justify-between px-4">
      <div className="flex items-center border-r border-r-gray">
        <div className="flex items-center gap-4 shrink-0 text-headline-01 border-r border-r-gray py-2 pr-4">
          <span className="flex items-center">
            <IconEthereum className="text-gray-light" />
            <span className="text-white">${ethPrice}</span>
          </span>
          <span className="flex items-center">
            <IconGas className="mr-[6px] text-gray-light" />
            <span className="text-white">{gasFee} GWEI</span>
          </span>
        </div>
        <div className="px-3 cursor-pointer" onClick={onChangeMode}>
          <Icon className="text-white" />
        </div>
      </div>
      <SocialMediaIcons />
    </div>
  );
});
FooterBottom.displayName = "FooterBottom";

const MobileInfoBar = React.memo(() => {
  const [isDarkMode, setIsDarkModa] = React.useState<boolean>(true);
  const [gasFee, setGasFee] = React.useState<any>(0);
  const [ethPrice, setEthPrice] = React.useState<any>(0);
  const { getItem, setItem } = useLocalStorage();
  const getData = useCallback(async () => {
    const response = await etherscanService.getData();

    setEthPrice(Number.parseFloat(response.result.ethusd).toFixed(2));
    setGasFee(response.result.safeGasPrice);
  }, []);

  const onChangeMode = () => {
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      setItem(THUNDER_THEME_NAME, "dark");
    } else {
      document.documentElement.classList.remove("dark");
      setItem(THUNDER_THEME_NAME, "light");
    }
    setIsDarkModa(!isDarkMode);
  };

  React.useEffect(() => {
    getData();
    const interval = setInterval(() => {
      getData();
    }, IntervalValue);

    setIsDarkModa(getItem(THUNDER_THEME_NAME) === "dark");

    return () => clearInterval(interval);
  }, []);
  const Icon = isDarkMode ? IconSun : IconMoon;

  return (
    <div className="flex items-center justify-between px-5 py-[15px] border-b border-gray">
      <div className="cursor-pointer" onClick={onChangeMode}>
        <Icon className="text-white" />
      </div>
      <div className="flex items-center gap-4 shrink-0 text-headline-02">
        <span className="flex items-center">
          <IconEthereum className="text-gray-light" />
          <span className="text-white">${ethPrice}</span>
        </span>
        <span className="flex items-center">
          <IconGas className="mr-[6px] text-gray-light" />
          <span className="text-white">{gasFee} GWEI</span>
        </span>
      </div>
    </div>
  );
});
MobileInfoBar.displayName = "MobileInfoBar";

const FooterMobileBottom = React.memo(() => {
  const [initLocation, setInitLocation] = React.useState<any>(location.pathname);
  const { isConnected, user } = useAppSelector((state) => state.wallet);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const menus = [
    {
      icon: IconHome,
      path: PATHS.MARKETPLACE,
      onClick: () => {
        navigate(PATHS.MARKETPLACE);
        setInitLocation(PATHS.MARKETPLACE);
      },
    },
    {
      icon: IconCollections,
      path: PATHS.RANKINGS,
      onClick: () => {
        navigate(PATHS.RANKINGS);
        setInitLocation(PATHS.RANKINGS);
      },
    },
    {
      icon: IconDrops,
      path: PATHS.DROPS,
      onClick: () => {
        navigate(PATHS.DROPS);
        setInitLocation(PATHS.DROPS);
      },
    },
    {
      icon: IconWallet,
      onClick: () => navigate(PATHS.LOGIN),
    },
    {
      path: PATHS.PROFILE,
      icon: IconWalletConnect,
      onClick: () => {
        navigate(PATHS.PROFILE);
        setInitLocation(PATHS.PROFILE);
      },
      isHidden: !isConnected,
    },
    {
      icon: IconCart,
      onClick: () => dispatch(toggleCartModal()),
    },
  ].filter((item) => !item.isHidden);
  React.useEffect(() => {
    setInitLocation(location.pathname);
  }, [location.pathname]);

  return (
    <div className={clsx("mobile-nav", `grid-cols-${menus.length}`)}>
      {menus.map((menu, i) => {
        const Icon = menu.icon ?? React.Fragment;

        return (
          <div key={i} onClick={menu.onClick} className={menu.path === initLocation ? "active" : ""}>
            {menu.path === PATHS.PROFILE ? <Avatar image={user?.image} userId={user?.id} className="w-6 h-6" /> : <Icon />}
          </div>
        );
      })}
    </div>
  );
});
FooterMobileBottom.displayName = "FooterMobileBottom";

const Footer = () => {
  const ref = useRef<any>(null);
  const setFooterHeight = () => {
    const cssRoot = document.querySelector(":root");
    if (cssRoot) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      cssRoot.style.setProperty("--footerHeight", `${ref.current?.offsetHeight || 0}px`);
    }
  };

  React.useLayoutEffect(() => {
    setFooterHeight();
    window.addEventListener("resize", () => setFooterHeight());

    return () => {
      window.removeEventListener("resize", () => setFooterHeight());
    };
  }, [ref.current]);

  return (
    <div className={clsx("bg-bg border-t border-t-gray fixed bottom-0 left-0 w-full", useIsMobile() ? "!z-30" : "z-20")} ref={ref}>
      {useIsMobile() && window.location.pathname === PATHS.LOGIN ? <MobileInfoBar /> : <></>}
      {useIsMobile() ? <FooterMobileBottom /> : <FooterBottom />}
    </div>
  );
};

export default Footer;

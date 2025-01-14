import React, { useState } from "react";
import Button from "components/Button";
import { IconArrowRight, IconCoinbase, IconDiscord, IconFuelet, IconFuelWallet, IconGoogle, IconLightning, IconSpinner, IconMetamask, IconWalletConnect } from "icons";
import { useWallet } from "hooks/useWallet";
import { useFuel } from "hooks/useFuel";
import { useDispatch } from "react-redux";
import { useFuelet } from "hooks/useFuelet";
import { setAddress, setIsConnected, setUser, toggleWalletModal } from "store/walletSlice";
import { useMetamask } from "hooks/useMetamask";
import { useCoinbase } from "hooks/useCoinbase";
import config from "config";
import { FUEL_TYPE } from "../../hooks/useFuelExtension";
import { authenticateWithStytch, authenticateWithWebAuthn, getPKPs, registerWebAuthn, signInWithDiscord, signInWithGoogle } from "lit-protocol/lit";
import clsx from "clsx";
import Input from "components/Input";
import VerifyEmail from "./VerifyEmail";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from "schema";
import { useForm } from "react-hook-form";
import { useStytch } from "@stytch/react";
import { AuthMethod } from "@lit-protocol/types";
import userService from "api/user/user.service";
import VerifyPhone from "./VerifyPhone";
import VerifyPasskey from "./VerifyPasskey";

const WalletList = {
  [FUEL_TYPE.FUEL]: {
    name: "Fuel",
    icon: IconFuelWallet,
  },
  [FUEL_TYPE.FUELET]: {
    name: "Fuelet",
    icon: IconFuelet,
  },
  // [FUEL_TYPE.FUEL_WALLETCONNECT]: {
  //   name: "Metamask",
  //   icon: IconMetamask,
  // },
  [FUEL_TYPE.WAGMI_METAMASK]: {
    name: "Metamask",
    icon: IconMetamask,
  },
  [FUEL_TYPE.WAGMI_COINBASE]: {
    name: "Coinbase",
    icon: IconCoinbase,
  },
  [FUEL_TYPE.WAGMI_WALLETCONNECT]: {
    name: "WalletConnect",
    icon: IconWalletConnect,
  },
  [FUEL_TYPE.LIT_GOOGLE_AUTH]: {
    name: "Google",
    icon: IconGoogle,
  },
  [FUEL_TYPE.LIT_DISCORD_AUTH]: {
    name: "Discord",
    icon: IconDiscord,
  },
};

const SocialList = [
  {
    name: "Google",
    key: "google",
    icon: IconGoogle,
  },
  {
    name: "Discord",
    key: "discord",
    icon: IconDiscord,
  },
  {
    name: "Use A Passkey",
    key: "passkey",
    icon: IconArrowRight,
  },
];

const ConnectWalletButton = ({ name, icon, type, activeConnector, unavailable }: { name: string; icon: any; type: FUEL_TYPE; activeConnector: number; unavailable?: boolean }) => {
  const { walletConnectGateway } = useWallet();
  const dispatch = useDispatch();

  const { error: fuelError, isLoading: fuelLoading } = useFuel();
  const [metamaskError] = useMetamask();
  const [coinbaseError] = useCoinbase();
  const Icon = icon ?? IconFuelet;

  const activeWallet = {
    [FUEL_TYPE.FUEL]: { error: fuelError, isLoading: fuelLoading },
    [FUEL_TYPE.FUELET]: { error: fuelError, isLoading: fuelLoading },
    // [FUEL_TYPE.FUEL_WALLETCONNECT]: { error: metamaskError },
    [FUEL_TYPE.WAGMI_METAMASK]: { error: metamaskError },
    [FUEL_TYPE.WAGMI_WALLETCONNECT]: { error: metamaskError },
    [FUEL_TYPE.WAGMI_COINBASE]: { error: coinbaseError },
    [FUEL_TYPE.LIT_GOOGLE_AUTH]: { error: metamaskError },
    [FUEL_TYPE.LIT_DISCORD_AUTH]: { error: metamaskError },
  }[type as FUEL_TYPE];

  const onConnect = () => {
    if (name == "Google") {
      signInWithGoogle("http://localhost:3000/marketplace");
    } else if (name == "Discord") {
      signInWithDiscord("http://localhost:3000/marketplace");
    } else {
      walletConnectGateway(type).then((res: any) => {
        if (res) {
          dispatch(toggleWalletModal());
        }
      });
    }
  };

  return (
    <div className={`flex p-2.5 h-[60px] items-center justify-between border border-gray  bg-bg-light rounded-[5px] group`}>
      <div className="flex items-center gap-x-2.5">
        <Icon className={clsx("w-8 h-8", name === "Google" ? "h-[22.5px] w-[22.5px]" : name === "Discord" ? "text-[#738ADB]" : "")} />
        <h6 className="text-head6 font-spaceGrotesk text-white">{name}</h6>
      </div>
      {activeWallet.isLoading ? (
        <div className="flex-center h-[43px]">
          <IconSpinner className="text-white animate-[spin_3s_linear_infinite]" />
        </div>
      ) : unavailable ? (
        <span className="text-h6 text-gray-light flex-center animate-pulse white">Temporarily Unavailable</span>
      ) : activeWallet.error === "" ? (
        <Button className="btn-connect" onClick={onConnect}>
          CONNECT <IconArrowRight className="w-[18px] h-[18px]" />
        </Button>
      ) : (
        <a
          href={
            name === "Metamask"
              ? "https://metamask.io/download/"
              : name === "Coinbase"
              ? "https://coinbase.com/wallet/downloads"
              : name === "Fuel"
              ? "https://chrome.google.com/webstore/detail/fuel-wallet/dldjpboieedgcmpkchcjcbijingjcgok"
              : ""
          }
          target="_blank"
          rel="noreferrer"
        >
          <Button className="btn-secondary btn-sm no-bg h-10">
            INSTALL <IconArrowRight className="w-[18px] h-[18px]" />
          </Button>
        </a>
      )}
    </div>
  );
};

export const ConnectWallet = () => {
  const { walletConnectGateway } = useWallet();
  const dispatch = useDispatch();
  const walletList = config.getConfig("walletList");
  const [showVerifyEmail, setShowVerifyEmail] = useState(false);
  const [showVerifyPhone, setShowVerifyPhone] = useState(false);
  const [showVerifyPasskey, setShowVerifyPasskey] = useState(false);
  const [methodId, setMethodId] = useState<string>("");
  const [codeError, setCodeError] = useState(false);
  const [isEmailSelected, setIsEmailSelected] = useState(true);
  const schema = yup
    .object({
      email: isEmailSelected ? yup.string().email("invalid email").required() : yup.string(),
      phonenumber: !isEmailSelected ? yup.string().required("invalid phone number") : yup.string(),
    })
    .required();
  const {
    getValues,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const stytchClient = useStytch();

  const SocialButton = ({ item }: any) => {
    const Icon = item.icon;
    const name = item.name;
    const key = item.key;

    return (
      <Button
        className="btn-secondary px-4 py-3 h-10 w-full rounded text-headlineMd "
        onClick={() => {
          if (key == "google") signInWithGoogle("http://localhost:3000/marketplace");
          else if (key == "discord") signInWithDiscord("http://localhost:3000/marketplace");
          else if (key == "passkey") setShowVerifyPasskey(true);
          else return;
        }}
      >
        <span className="hidden lg:flex">{name}</span>
        <Icon className={clsx("w-[18px] h-[18px]", name === "Google" ? "h-[13.5px] w-[13.5px]" : name === "Discord" ? "text-[#738ADB]" : "")} />
      </Button>
    );
  };

  const onValid = (data: any) => {
    console.log(isEmailSelected);
    sendPasscode(data);
  };

  const onHandleSubmit = () => {
    handleSubmit(onValid, (e) => console.log(e))();
  };

  async function sendPasscode(data?: any) {
    const _email = data ? data.email : getValues("email");
    const _phonenumber = data ? data.phonenumber : getValues("phonenumber");
    console.log(_email, _phonenumber);

    try {
      let response;
      if (_email) {
        response = await stytchClient.otps.email.loginOrCreate(_email);
        setShowVerifyEmail(true);
      } else {
        console.log(!_phonenumber.startsWith("+") ? `+${_phonenumber}` : _phonenumber);
        response = await stytchClient.otps.sms.loginOrCreate(!_phonenumber.startsWith("+") ? `+${_phonenumber}` : _phonenumber);
        setShowVerifyPhone(true);
      }
      setMethodId(response.method_id);
    } catch (err) {
      setShowVerifyPhone(false);
      setShowVerifyEmail(false);
      console.log(err);
    }
  }

  async function authenticate(code: string) {
    try {
      const response = await stytchClient.otps.authenticate(code, methodId, {
        session_duration_minutes: 60,
      });

      try {
        const authMethod: AuthMethod = (await authenticateWithStytch(response.session_jwt, response.user_id)) as any;
        console.log(authMethod);

        // mintPKP({
        //   authMethodType: authMethod.authMethodType,
        //   accessToken: authMethod.accessToken,
        // });

        getPKPs(authMethod).then((pkps) => {
          console.log(pkps);
          userService.userCreate({ walletAddress: pkps[0].ethAddress }).then((res: any) => {
            const { walletAddress } = res.data;
            dispatch(setIsConnected(true));
            dispatch(setAddress(walletAddress));
            dispatch(setUser(res.data));
            walletConnectGateway(FUEL_TYPE.WAGMI_METAMASK);
          });
        });
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      setCodeError(true);
      console.log(err);
    }
  }

  if (showVerifyEmail) return <VerifyEmail email={getValues("email")} error={codeError} setError={setCodeError} authenticate={authenticate} sendPasscode={sendPasscode} />;
  else if (showVerifyPhone) return <VerifyPhone email={getValues("phonenumber")} error={codeError} setError={setCodeError} authenticate={authenticate} sendPasscode={sendPasscode} />;
  else if (showVerifyPasskey)
    return (
      <VerifyPasskey
        authenticate={async (isRegister: boolean) => {
          try {
            if (isRegister) {
              const newPKP = await registerWebAuthn();
              console.log(newPKP);
            } else {
              const result = await authenticateWithWebAuthn();
              console.log(result);
            }
          } catch (error) {
            console.log(error);
            setShowVerifyPasskey(false);
          }
        }}
      />
    );
  else
    return (
      <div className="flex flex-col h-full p-5 gap-4 overflow-y-scroll no-scrollbar">
        {/* <div className="flex flex-col gap-[18px]">
          <div className="flex flex-col gap-[5px]">
            <h5 className="text-head5 font-spaceGrotesk text-white">Login/Sign up</h5>
            <span className="text-bodyMd text-gray-light font-spaceGrotesk">Choose a way to get you started quickly</span>
          </div>
          <div className="flex flex-col gap-2.5 border border-gray rounded-lg p-[15px]">
            <div className="flex items-center justify-between w-full">
              <h6 className="text-h6 text-white">{isEmailSelected ? "Email Address" : "Phone Number"}</h6>
              <u
                className="cursor-pointer text-bodySm text-white"
                onClick={() => {
                  reset();
                  setIsEmailSelected((prev) => !prev);
                }}
              >
                {isEmailSelected ? "Use Phone Number" : "Use Email Address"}{" "}
              </u>
            </div>
            <div className="flex items-center h-fit gap-6 border border-gray rounded-lg p-2.5">
              <Input
                placeholder={isEmailSelected ? "Enter your e-mail address" : "Enter your phone number"}
                containerClassName="!h-10 border-none !p-0"
                {...register(isEmailSelected ? "email" : "phonenumber")}
                error={isEmailSelected ? errors.email?.message : errors.phonenumber?.message}
              />
              <Button className="btn-primary h-10 btn-sm whitespace-nowrap" onClick={onHandleSubmit}>
                send codef
              </Button>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="h-[1px] bg-gray w-full"></div>
              <span className="whitespace-nowrap text-headline-01 !tracking-[2.4px] uppercase font-bigShoulderDisplay text-gray-light">or start with socials</span>
              <div className="h-[1px] bg-gray w-full"></div>
            </div>
            <div className="grid grid-cols-3 lg:flex lg:flex-col gap-2.5">
              {SocialList.map((item: any) => (
                <SocialButton key={item.key} item={item} />
              ))}
            </div>
          </div>
        </div> */}

        {/* <div className="h-[1px] bg-gray w-full flex-shrink-0" /> */}

        <div className="flex flex-col gap-[18px]">
          {/* <div className="flex flex-col gap-[5px]">
            <h5 className="text-head5 font-spaceGrotesk text-white">Connect your wallet</h5>
            <span className="text-bodyMd text-gray-light font-spaceGrotesk">Use your existing wallet to login</span>
          </div> */}

          <div className="flex flex-col gap-2.5">
            {walletList.map((item: FUEL_TYPE, activeIndex: number) => {
              const wallet = WalletList[item] as any;

              if (item === FUEL_TYPE.LIT_GOOGLE_AUTH || item === FUEL_TYPE.LIT_DISCORD_AUTH) return <></>;

              return <ConnectWalletButton key={item} name={wallet.name} icon={wallet.icon} type={item} activeConnector={activeIndex} unavailable={wallet.unavailable} />;
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-auto">
          {config.getConfig("type") === "fuel" ? (
            <div className="flex p-[15px] gap-x-[15px] bg-gray border border-gray rounded-md mt-auto">
              <IconFuelWallet className="flex-shrink-0 w-6 h-6" />
              <div className="flex flex-col gap-y-[5px]">
                <h6 className="text-head6 font-spaceGrotesk text-white">New to Fuel?</h6>
                <p className="text-bodyMd font-spaceGrotesk text-gray-light">Fuel is the fastest execution layer for the modular blockchain stack.</p>
                <a className="text-bodyMd font-spaceGrotesk text-white underline" href="https://www.fuel.network/" target="_blank" rel="noreferrer">
                  Learn More
                </a>
              </div>
            </div>
          ) : (
            <></>
          )}
          <span className="text-bodyMd text-gray-light">
            By connecting your wallet, you agree to our <u className="text-white cursor-pointer">Terms of Service</u> and our <u className="text-white cursor-pointer">Privacy Policy.</u>
          </span>
        </div>
      </div>
    );
};

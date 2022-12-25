import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { openInNewTab } from "pages/Landing/Slider/Slider";

const LayoutLanding = ({ children }: { children: React.ReactNode }) => {
  let amount = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      const el = document.getElementById("translateElement");
      amount = amount === 0 ? -33 : 0;
      if (el) el.style.transform = `translateY(${amount}px)`;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-bg min-h-screen flex flex-col">
      <div className="py-2.5 h-[33px] w-full font-bigShoulderDisplay text-headlineSm uppercase bg-gray text-center text-white overflow-hidden">
        <div className="flex flex-col flex-grow ease-in-out transform duration-[350ms]" id="translateElement">
          <div className="h-[33px]">
            Join us to be a creator -{" "}
            <span
              className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:border-b after:border after:w-full"
              onClick={() => openInNewTab("https://forms.gle/d9sYqvXaF2PoHNvc7")}
            >
              APPLY NOW
            </span>
          </div>
          <div className="h-[33px]">Marketplace Coming Soon</div>
        </div>
      </div>
      <Header />
      <div className="pt-16">{children}</div>
      <Footer />
    </main>
  );
};

export default LayoutLanding;

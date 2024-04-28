import React, { useEffect, useRef } from "react";
import "./Tooltip.css";
import clsx from "clsx";

interface ITooltip {
  children: React.ReactNode;
  position?: string;
  content?: any;
  hiddenArrow?: any;
  contentClass?: any;
}

const Tooltip = ({ children, position = "bottom", content, contentClass, hiddenArrow = false }: ITooltip) => {
  const ref = useRef<HTMLDivElement>(null);
  const refContent = useRef<HTMLDivElement>(null);

  const currentPosition = () => {
    if (ref.current && refContent.current) {
      const x = ref.current?.getBoundingClientRect().x + ref.current.offsetWidth / 2;
      const y = ref.current?.getBoundingClientRect().y + ref.current?.getBoundingClientRect().height / 2 - 10;

      const windowWidth = window.innerWidth;
      const contentwidth = refContent.current?.clientWidth;
      const isOffScreen = Math.floor(x) + contentwidth / 2 >= windowWidth;
      const offScreenWidth = contentwidth / 2 - (windowWidth - Math.floor(x)); //Ekranin disinda kalan alan

      refContent.current.style.left = `${x + (isOffScreen ? -(offScreenWidth + 10) : 0)}px`; // +10 content ile ekran kenari arasina bosluk eklemek icin
      refContent.current.style.top = `${y}px`;
    }
  };
  const onMouseEnter = () => {
    if (ref.current && refContent.current) {
      currentPosition();
      refContent.current.style.visibility = "visible";
      refContent.current.style.opacity = "1";
    }
  };
  const onMouseLeave = () => {
    if (refContent.current) {
      refContent.current.style.opacity = "0";
    }
  };

  useEffect(() => {
    currentPosition();
  }, []);

  return (
    <div className={clsx("tooltip", position)} ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
      <div ref={refContent} className={clsx("content", contentClass)}>
        {content} {!hiddenArrow && <span className="arrow" />}
      </div>
    </div>
  );
};

export default Tooltip;

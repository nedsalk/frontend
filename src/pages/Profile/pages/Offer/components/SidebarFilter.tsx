import React from "react";
import clsx from "clsx";
import Collapse from "components/Collapse";
import Radio from "components/Radio";
import { useOfferContext } from "../OfferContext";

const SidebarFilter = () => {
  const { onChangeFilterValue, filterItems, filterValue } = useOfferContext();

  return (
    <div className="py-5 pr-5 border-r border-gray w-60">
      <div className="sticky h-fit" style={{ top: "calc(var(--headerHeight) + 20px)" }}>
        <Collapse isOpen={true}>
          <Collapse.Header>Offer Type</Collapse.Header>
          <Collapse.Body>
            {filterItems.map((item: any, k: any) => {
              const isChecked = item.value === filterValue;

              return (
                <div key={k} className={clsx("hover:bg-bg-light border border-gray rounded-md p-2.5 text-white", isChecked ? "bg-gray" : "")}>
                  <Radio defaultChecked={isChecked} onClick={() => onChangeFilterValue(item.value)} name="offer-type">
                    <span className="body-medium">
                      {item.text} {item.count > 0 ? `(${item.count})` : null}
                    </span>
                  </Radio>
                </div>
              );
            })}
          </Collapse.Body>
        </Collapse>
      </div>
    </div>
  );
};

export default SidebarFilter;

import React from "react";
import { IconEthereum, IconHand, IconMarketBasket, IconThunderSmall } from "icons";
import clsx from "clsx";
import { useAppDispatch } from "store";
import { add, remove } from "store/cartSlice";

import "./CollectionItem.css";
import { CollectionItemResponse } from "api/collections/collections.type";
import { PATHS } from "../../../../router/config/paths";

const ButtonBuyNow = React.memo(({ className, onClick }: any) => {
  return (
    <button className={clsx("button-buy-now", className)} onClick={onClick}>
      <span className="uppercase">buy now</span>
      <IconThunderSmall className="w-7 h-7" />
    </button>
  );
});
ButtonBuyNow.displayName = "ButtonBuyNow";

const ButtonMakeOffer = React.memo(({ className, onClick }: any) => {
  return (
    <button className={clsx("button-make-offer", className)} onClick={onClick}>
      <span className="uppercase">make offer</span>
      <IconHand className="fill-white" />
    </button>
  );
});
ButtonMakeOffer.displayName = "ButtonMakeOffer";
const CollectionItemCheckbox = (props: any) => {
  return (
    <label className="collection-item-checkbox">
      <input type="checkbox" className="hidden" {...props} />
      <span></span>
    </label>
  );
};
const CollectionItem = ({ collection }: { collection: CollectionItemResponse }) => {
  const dispatch = useAppDispatch();
  const onSelect = () => {
    if (!collection.isSelected) {
      dispatch(add(collection));
    } else {
      dispatch(remove(collection.tokenOrder));
    }
  };

  const collectionUrl = PATHS.NFT_DETAILS.replace(":nftId", collection.id);

  return (
    <a href={collectionUrl} className={clsx("group relative overflow-hidden border rounded-md hover:bg-bg-light", collection.isSelected ? "border-white" : "border-gray")}>
      <div className="overflow-hidden relative">
        {collection.salable && <CollectionItemCheckbox checked={collection.isSelected} onChange={onSelect} />}
        <img alt={collection.image} className="w-full transition-all duration-300 group-hover:scale-[110%]" src={collection.image} />
      </div>
      <div className="p-2.5 border-b border-b-gray">
        <h6 className="text-h6 text-white">{collection.name}</h6>
      </div>
      <div className="p-2.5 flex items-center">
        {collection.salable ? (
          <>
            <h6 className="text-h5 text-white">{collection.price}</h6>
            <IconEthereum className="text-gray-light" />
          </>
        ) : (
          <div className="flex-center h-7 text-headline-01 text-gray-light uppercase">not lısted</div>
        )}
      </div>
      <div className="p-2.5 flex items-center text-gray-light gap-1">
        <IconMarketBasket />
        <span className="body-small text-overflow">Last sale price {collection.lastSalePrice ?? 0} ETH</span>
      </div>
      <div className="absolute w-full transition-all translate-y-full group-hover:-translate-y-full">{collection.salable ? <ButtonBuyNow onClick={onSelect} /> : <ButtonMakeOffer />}</div>
    </a>
  );
};

export default React.memo(CollectionItem);
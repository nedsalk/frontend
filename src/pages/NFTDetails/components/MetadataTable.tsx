import Button from "components/Button";
import EthereumPrice from "components/EthereumPrice";
import { IconListed } from "icons";
import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "store";
import "./MetadataTable.css";
import { CheckoutType, setCheckout, toggleCheckoutModal } from "store/checkoutSlice";

const MetadataTable = ({ metadata, traitfloors }: { metadata: any; traitfloors: any }) => {
  const dispatch = useDispatch();
  const { selectedNFT } = useAppSelector((state) => state.nftdetails);
  const { user, isConnected } = useAppSelector((state) => state.wallet);

  if (metadata?.length === 0) return <></>;

  const isOwner = () => {
    return isConnected ? user?.id === selectedNFT?.user?.id : false;
  };

  const getTraitFloor = (item: any) => traitfloors.find((trait: any) => trait.traitType === item.traitType)?.price ?? "-";

  return (
    <div className="flex flex-col border border-gray rounded-[5px]">
      <h6 className="pl-5 py-4 border-b border-gray">Metadata</h6>
      <div className="table-head grid-cols-[1fr_2fr_1fr]">
        <div className="text-headline-01">TRAIT</div>
        <div className="text-headline-01">NAME</div>
        <div className="text-headline-01">TRAIT FLOOR</div>
      </div>

      {metadata.map((item: any, i: number) => {
        return (
          <div className="group" key={i}>
            <div className="table-body grid-cols-[1fr_2fr_1fr] cursor-pointer">
              <div>{item.traitType} </div>
              <div className="text-white">{item.value}</div>
              <div>
                {traitfloors.find((trait: any) => trait.traitType === item.traitType) ? (
                  <EthereumPrice isNull={true} priceClassName="text-head6 text-white" price={traitfloors.find((trait: any) => trait.traitType === item.traitType)?.price} />
                ) : (
                  <span className="text-headline-01">NO LISTINGS</span>
                )}
              </div>
            </div>
            {isOwner() && getTraitFloor(item) !== "-" ? (
              <div
                className={`overflow-hidden ${
                  i === metadata.length - 1 ? "rounded-b-[4px]" : ""
                } border-t border-gray flex justify-center transition-all duration-300 ease-in-out opacity-0 h-0 group-hover:opacity-100 group-hover:h-10 group-hover:bg-bg-light`}
              >
                <Button
                  className="btn-secondary no-bg text-headline-02 border-none rounded-none py-3"
                  onClick={() => {
                    dispatch(
                      setCheckout({
                        type: selectedNFT.salable ? CheckoutType.UpdateListing : CheckoutType.ConfirmListing,
                        currentItemId: selectedNFT.id,
                        price: getTraitFloor(item),
                      })
                    );
                    dispatch(toggleCheckoutModal());
                  }}
                >
                  LIST AT TRAIT FLOOR <IconListed className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MetadataTable;

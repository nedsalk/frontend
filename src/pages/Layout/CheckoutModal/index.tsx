import React from "react";
import { useAppDispatch, useAppSelector } from "store";
import Checkout from "./Checkout";
import InsufficientFund from "./InsufficientFund";
import { CheckoutType, toggleCheckoutModal } from "store/checkoutSlice";
import BidCheckout from "./BidCheckout";
import MakeOfferCheckout from "./MakeOfferCheckout";
import CancelOfferCheckout from "./CancelOfferCheckout";
import UpdateOfferCheckout from "./UpdateOfferCheckout";
import ConfirmListingCheckout from "./ConfirmListingCheckout";
import CancelAuctionCheckout from "./CancelAuctionCheckout";
import TransferCheckout from "./TransferCheckout";
import CancelListingCheckout from "./CancelListingCheckout";
import { removeBuyNowItem } from "store/cartSlice";
import BulkListingCheckout from "./BulkListingCheckout";
import AcceptBidCheckout from "./AcceptBidCheckout";
import AcceptOfferCheckout from "./AcceptOfferCheckout";
import CancelAllListingCheckout from "./CancelAllListingCheckout";
import CancelAllOffers from "./CancelAllOffersCheckout";
import CancelAllOffersListingsCheckout from "./CancelAllOffersListingsCheckout";
import MintCheckout from "./MintCheckout";

const Index = () => {
  const dispatch = useAppDispatch();
  const { show, isInsufficientBalance, checkoutType, onCheckoutComplete } = useAppSelector((state) => state.checkout);
  const onClose = () => {
    dispatch(toggleCheckoutModal());
    if (checkoutType === CheckoutType.None) dispatch(removeBuyNowItem());

    const isValidOnCheckoutComplete = [
      CheckoutType.Standard,
      CheckoutType.BulkListing,
      CheckoutType.MakeOffer,
      CheckoutType.PlaceBid,
      CheckoutType.UpdateOffer,
      CheckoutType.ConfirmListing,
      CheckoutType.UpdateListing,
      CheckoutType.CancelOffer,
      CheckoutType.AcceptOffer,
    ];
    if (isValidOnCheckoutComplete.includes(checkoutType)) {
      onCheckoutComplete();
    }
  };

  // return <ConfirmListingCheckout updateListing={true} show={true} onClose={onClose} />;
  switch (checkoutType) {
    case CheckoutType.MakeOffer:
      return <MakeOfferCheckout show={show} onClose={onClose} />;
    case CheckoutType.PlaceBid:
      return <BidCheckout show={show} onClose={onClose} />;
    case CheckoutType.CancelOffer:
      return <CancelOfferCheckout show={show} onClose={onClose} />;
    case CheckoutType.UpdateOffer:
      return <UpdateOfferCheckout show={show} onClose={onClose} />;
    case CheckoutType.AcceptBid:
      return <AcceptBidCheckout show={show} onClose={onClose} />;
    case CheckoutType.AcceptOffer:
      return <AcceptOfferCheckout show={show} onClose={onClose} />;
    case CheckoutType.ConfirmListing:
      return <ConfirmListingCheckout show={show} onClose={onClose} />;
    case CheckoutType.BulkListing:
      return <BulkListingCheckout show={show} onClose={() => dispatch(toggleCheckoutModal())} onDone={onClose} />;
    case CheckoutType.UpdateListing:
      return <ConfirmListingCheckout updateListing={true} show={show} onClose={onClose} />;
    case CheckoutType.Transfer:
      return <TransferCheckout show={show} onClose={onClose} />;
    case CheckoutType.CancelAuction:
      return <CancelAuctionCheckout show={show} onClose={onClose} />;
    case CheckoutType.CancelListing:
      return <CancelListingCheckout show={show} onClose={onClose} />;
    case CheckoutType.CancelAllListings:
      return <CancelAllListingCheckout show={show} onClose={onClose} />;
    case CheckoutType.CancelAllOffers:
      return <CancelAllOffers show={show} onClose={onClose} />;
    case CheckoutType.CancelAllOffersListings:
      return <CancelAllOffersListingsCheckout show={show} onClose={onClose} />;
    case CheckoutType.MintCheckout:
      return <MintCheckout show={show} onClose={onClose} />;
    default:
      return isInsufficientBalance ? <InsufficientFund show={show} onClose={onClose} /> : <Checkout onClose={onClose} />;
  }
};

export default Index;

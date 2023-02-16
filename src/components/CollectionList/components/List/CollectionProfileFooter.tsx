import React from "react";
import Button from "components/Button";
import { IconTag } from "icons";
import { useAppSelector } from "store";
import useNavigate from "hooks/useNavigate";
import { PATHS } from "../../../../router/config/paths";

const CollectionFooter = () => {
  const navigate = useNavigate();
  const selectedBulkListingItemCount = useAppSelector((state) => state.bulkListing.items.length);

  if (selectedBulkListingItemCount <= 0) {
    return null;
  }

  const onClear = () => {
    console.log(onClear);
  };
  const onUpdateBulkListing = () => {
    navigate(PATHS.BULK_LISTING);
  };

  return (
    <div className="sticky bottom-0 py-3 flex gap-3 items-center justify-end border-t border-t-gray bg-bg z-20">
      <Button className="btn-secondary uppercase" onClick={onClear}>
        Clear {selectedBulkListingItemCount} {selectedBulkListingItemCount > 1 ? "items" : "item"}
        <IconTag />
      </Button>
      <Button className="uppercase" onClick={onUpdateBulkListing}>
        LIST/ UPDATE {selectedBulkListingItemCount} {selectedBulkListingItemCount > 1 ? "items" : "item"}
        <IconTag />
      </Button>
    </div>
  );
};

export default CollectionFooter;
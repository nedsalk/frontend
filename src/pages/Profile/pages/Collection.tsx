import React from "react";
import CollectionList from "components/CollectionList";
import { useOutletContext } from "react-router-dom";

const options = {
  hiddenFilter: true,
  hiddenSweep: true,
};
const Collection = () => {
  const [userInfo, filter]: any = useOutletContext();

  return <CollectionList collectionItems={userInfo.tokens} filterItems={filter} options={options} onChangeFilter={console.log} />;
};

export default Collection;
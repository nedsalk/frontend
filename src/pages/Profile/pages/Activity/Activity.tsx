import React, { useState } from "react";
import collectionService from "api/collections/collections.service";
import ActivityList from "./components/ActivityList";
import { useAppSelector } from "store";

const Activity = () => {
  const [activities, setActivities] = useState([]);
  const [pagination, setPagination] = useState({});
  const filters = collectionService.getActivityFilters();
  const { user } = useAppSelector((state) => state.wallet);

  const fetchActivity = async () => {
    const response = await collectionService.getActivity({
      userId: user.id,
    });
    const data = response.data.map((item: any) => ({
      name: item.token.name,
      description: "",
      image: item.token.image,
      price: item.price,
      type: filters[item.activityType].name,
      typeIcon: filters[item.activityType].icon,
    })) as any;
    setActivities(data);
    setPagination({
      itemsCount: response.itemsCount,
      pageCount: response.pageCount,
      pageSize: response.pageSize,
      pageNumber: response.pageNumber,
    });
  };

  React.useEffect(() => {
    fetchActivity();
  }, []);

  return <ActivityList activities={activities} pagination={pagination} filters={filters} />;
};

export default Activity;

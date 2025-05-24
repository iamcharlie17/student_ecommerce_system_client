import { useEffect, useState } from "react";
import useProduct from "../../hooks/useProduct";
import useAuth from "../../hooks/useAuth";
import NoItems from "../NoItems";
import UserItemsTable from "../UserItemsTable";

const Ads = () => {
  const [userItems, setUserItems] = useState([]);
  const { items } = useProduct();
  const { user } = useAuth();
  useEffect(() => {
    setUserItems(items.filter((item) => item.seller == user.id));
  }, [items]);
  return (
    <>
      {userItems.length > 0 ? (
        <UserItemsTable userItems={userItems} />
      ) : (
        <NoItems />
      )}
    </>
  );
};

export default Ads;

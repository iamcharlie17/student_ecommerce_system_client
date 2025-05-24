import { useEffect, useState } from "react";
import useProduct from "../../hooks/useProduct";
import useAuth from "../../hooks/useAuth";
import NoItems from "../NoItems";

const Ads = () => {
  const [userItems, setUserItems] = useState([]);
  const { items } = useProduct();
  const { user } = useAuth();
  useEffect(() => {
    setUserItems(items.filter((item) => item.seller == user.email));
  }, [items, user.email]);
  return (
    <>{userItems.length > 0 ? <div>{userItems.length}</div> : <NoItems />}</>
  );
};

export default Ads;

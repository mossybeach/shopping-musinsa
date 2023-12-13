import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item?.id}`);
  };
  return (
    <div className="productcard" onClick={showDetail}>
      <img src={item?.img} />
      <div>Conscious Choice</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>{item?.new === true ? "New Item" : "On Sale"}</div>
    </div>
  );
};

export default ProductCard;

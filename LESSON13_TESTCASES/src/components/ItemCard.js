import { useDispatch } from "react-redux";
import { CDN_LINK } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemCard = (data) => {
  console.log(data);
  const dispatch = useDispatch();
  const handleClickItem = () => {
    dispatch(addItem(data?.data));
    console.log("done done");
  };
  return (
    <div data-testid="foodItems" className=" border-b-2 border-gray-200">
      <div className="p-4 m-4 text-left justify-between flex">
        <div className="w-9/12 grid">
          <span>{data?.data?.name}</span>
          <span className="">
            ₹
            {data?.data?.price
              ? data?.data?.price / 100
              : data?.data?.defaultPrice / 100}
          </span>
          <p className="font-extralight py-1">{data?.data?.description}</p>
        </div>
        {data?.data?.imageId && (
          <div className="w-3/12">
            <div className="absolute mx-16 py-36">
              <button
                className=" bg-white p-3 text-green-500 rounded-lg"
                onClick={handleClickItem}
              >
                ADD
              </button>
            </div>
            <img className="rounded-lg" src={CDN_LINK + data?.data?.imageId} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemCard;

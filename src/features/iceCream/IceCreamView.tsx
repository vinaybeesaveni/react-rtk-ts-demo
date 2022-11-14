import { restocked, ordered } from "./iceCreamSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const IceCream = () => {
  const numOfIceCreams = useAppSelector(
    (state) => state.iceCream.numOfIceCreams
  );
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Number Of IceCream - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order IceCream</button>
      <button onClick={() => dispatch(restocked(5))}>Restock IceCream</button>
    </div>
  );
};

export default IceCream;

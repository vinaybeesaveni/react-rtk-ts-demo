import { ordered, restocked } from "./cakeSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const CakeView = () => {
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Number Of Cakes - {numOfCakes} </h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(1))}>Restock Cake</button>
    </div>
  );
};

export default CakeView;

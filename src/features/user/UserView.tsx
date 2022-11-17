import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
// import { atnIncrementTestCount } from "../test/testActions";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const user = useAppSelector((state) => state.user);
  // const count = useAppSelector((state) => state.test);
  console.log(user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // const handleIncrement = () => {
  //   dispatch(atnIncrementTestCount(6));
  // };
  return (
    <div>
      {/* <p>{count.count}</p> */}
      <h2>List of Users</h2>
      {/* <button onClick={handleIncrement}>Increment</button> */}
      {user.users && user.users.map((user) => <p key={user.id}>{user.name}</p>)}
    </div>
  );
};

export default UserView;

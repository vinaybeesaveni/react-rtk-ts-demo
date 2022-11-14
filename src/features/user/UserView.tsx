import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const user = useAppSelector((state) => state.user);
  console.log(user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div>
      <h2>List of Users</h2>
      {/* {user.loading && <p>loading....</p>}
             {!user.loading && user.error ? <div>Network Error</div> : null}
             {!user.loading && user.users.length > 0 ? user.users.map((user)=><p key={user.name}>{user.name}</p>) : null} */}
      {user.users && user.users.map((user) => <p key={user.id}>{user.name}</p>)}
    </div>
  );
};

export default UserView;

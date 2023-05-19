import App from "../../App";

export const CardList = ({ users }) => {
//   console.log(users);
  return (
    <ul>
      {users && users.length > 0 &&
        users.map((user) => (
          <li ke={user.id}>
            <App />
          </li>
        ))}
    </ul>
  );
};

import Card from "../Card/Card";
import { List } from "./CardList.styled";

export const CardList = ({ users }) => {
  console.log(users);
  return (
    <List>
      {users &&
        users.length > 0 &&
        users.map((user) => (
          <li key={user.id}>
            <Card cardInfo={user} />
          </li>
        ))}
    </List>
  );
};

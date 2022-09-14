import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { UserCard } from "../coms/UserCard";

import { Container } from "./styles";

export const Content = () => {
  const selectUsers = (state: RootState) => state.usersState.users;
  const selectProducts = (state: RootState) => state.productsState.products;

  const users = useSelector(selectUsers);
  const products = useSelector(selectProducts);

  return (
    <Container>
      {!!users.length ? (
        users.map((user) => <UserCard user={user} products={products} />)
      ) : (
        <Typography>Добавьте пользователей</Typography>
      )}
    </Container>
  );
};

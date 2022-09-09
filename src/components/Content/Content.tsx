import React from "react";
import { UserCard } from "../UserCard";

import { Container } from "./styles";

const users = [
  { id: 1, name: "Никита" },
  { id: 2, name: "Олег" },
  { id: 3, name: "Алина" },
  { id: 4, name: "Наташа" },
];

const products = [
  { id: 1, name: "Молоко", price: 130 },
  { id: 2, name: "Мясо", price: 730 },
  { id: 3, name: "Рыба", price: 430 },
  { id: 4, name: "Хлеб", price: 50 },
];

export const Content = () => {
  return (
    <Container>
      {users.map((user) => (
        <UserCard user={user} products={products} />
      ))}
    </Container>
  );
};

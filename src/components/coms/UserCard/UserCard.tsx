import React from "react";

import {
  IconButton,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Divider,
  Chip,
} from "@mui/material";

import {
  Delete as DeleteIcon,
  LibraryAddCheck as LibraryAddCheckIcon,
} from "@mui/icons-material";

import {
  Card,
  CheckboxContent,
  UserName,
  CardHeader,
  DividerBox,
  TotalAmount,
  TotalAmountContent,
} from "./styles";

import { TProduct, TUser } from "./types";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../app/usersSlice";

interface IUserCard {
  products: TProduct[];
  user: TUser;
}

export const UserCard: React.FC<IUserCard> = ({ user, products }) => {
  const dispatch = useDispatch();

  return (
    <Card variant="outlined">
      <CardHeader
        title={<UserName variant="h6">{user.name}</UserName>}
        action={
          <>
            <IconButton
              aria-label="delete"
              onClick={() => dispatch(deleteUser(user.id))}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </>
        }
      />

      <DividerBox>
        <Divider variant="fullWidth">
          <IconButton aria-label="settings">
            <LibraryAddCheckIcon fontSize="small" />
          </IconButton>
        </Divider>
      </DividerBox>
      <CheckboxContent>
        <FormGroup>
          {products.map((product) => (
            <FormControlLabel
              key={product.id}
              control={<Checkbox />}
              label={product.name}
            />
          ))}
        </FormGroup>
      </CheckboxContent>

      <TotalAmountContent>
        <Divider variant="fullWidth">
          <Chip label="Итого" />
        </Divider>
        <TotalAmount variant="h6">4343 &#8381;</TotalAmount>
      </TotalAmountContent>
    </Card>
  );
};

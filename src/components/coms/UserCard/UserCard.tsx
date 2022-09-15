import React, { useMemo } from "react";

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
import {
  selectAllProducts,
  selectProduct,
  deleteUser,
  recalculateAmount,
} from "../../../app/globalSlice";

interface IUserCard {
  products: TProduct[];
  user: TUser;
}

export const UserCard: React.FC<IUserCard> = ({ user, products }) => {
  const dispatch = useDispatch();

  const userTotalAmount = useMemo(
    () =>
      products
        .filter((product) => product.chosenProductUsers.includes(user.id))
        .reduce((acc, el) => acc + el.averageCost, 0),
    [products, user.id]
  );

  const isSelectedAllProducts = useMemo(
    () =>
      products.filter((product) => product.chosenProductUsers.includes(user.id))
        .length === products.length,
    [products, user.id]
  );

  const handleSelectProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, id } = event.target;
    dispatch(
      selectProduct({
        userId: user.id,
        productId: parseInt(id),
        productChecked: checked,
      })
    );
    dispatch(recalculateAmount());
  };

  const handleSelectAllProducts = () => {
    dispatch(
      selectAllProducts({
        userId: user.id,
        isSelectedAllProducts: isSelectedAllProducts,
      })
    );
    dispatch(recalculateAmount());
  };

  const handleDeleteUser = () => {
    dispatch(deleteUser(user.id));
    dispatch(recalculateAmount());
  };

  return (
    <Card variant="outlined">
      <CardHeader
        title={<UserName variant="h6">{user.name}</UserName>}
        action={
          <>
            <IconButton aria-label="delete" onClick={handleDeleteUser}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </>
        }
      />

      <DividerBox>
        <Divider variant="fullWidth">
          <IconButton aria-label="settings" onClick={handleSelectAllProducts}>
            <LibraryAddCheckIcon
              fontSize="small"
              color={isSelectedAllProducts ? "primary" : "inherit"}
            />
          </IconButton>
        </Divider>
      </DividerBox>
      <CheckboxContent>
        <FormGroup>
          {products.map((product) => (
            <FormControlLabel
              key={product.id}
              control={
                <Checkbox
                  id={`${product.id}`}
                  checked={
                    !!product.chosenProductUsers.find(
                      (chosenUser) => chosenUser === user.id
                    )
                  }
                  onChange={handleSelectProduct}
                />
              }
              label={product.name}
              sx={{
                ".MuiFormControlLabel-label": {
                  color: !!product.chosenProductUsers.length ? "gray" : "black",
                },
              }}
            />
          ))}
        </FormGroup>
      </CheckboxContent>

      <TotalAmountContent>
        <Divider variant="fullWidth">
          <Chip label="Итого" />
        </Divider>
        <TotalAmount variant="h6">{userTotalAmount} ₽</TotalAmount>
      </TotalAmountContent>
    </Card>
  );
};

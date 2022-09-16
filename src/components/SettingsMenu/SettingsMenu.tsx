import { Box, Chip, Divider, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  removeProduct,
  addUser,
  deleteUser,
  recalculateAmount,
} from "../../app/globalSlice";
import { Close as CloseIcon } from "@mui/icons-material";

import { Input } from "../coms/Input";

import { AddButton, Container, InputBlock, StackStyled } from "./styles";
import { RootState } from "../../app/store";
import { CollapseList } from "../coms/CollapseList";

export enum FieldNameEnum {
  USER = "Пользователь",
  PRODUCT = "Продукт",
  AMOUNT = "Стоимость",
}

export enum ExpandTypeEnum {
  USER,
  PRODUCT,
}

interface ISettingsMenu {
  handleCloseMenu: () => void;
}

export const SettingsMenu: React.FC<ISettingsMenu> = ({ handleCloseMenu }) => {
  const dispatch = useDispatch();

  const selectUsers = (state: RootState) => state.globalState.users;
  const selectProducts = (state: RootState) => state.globalState.products;

  const users = useSelector(selectUsers);
  const products = useSelector(selectProducts);

  const [newUser, setNewUser] = useState("");
  const [newProduct, setNewProduct] = useState("");
  const [newProductAmount, setNewProductAmount] = useState("0");

  const [expandedUsersList, setExpandedUsersList] = useState(true);
  const [expandedProductsList, setExpandedProductsList] = useState(true);

  const handleChangeInputValue = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: FieldNameEnum
  ) => {
    switch (field) {
      case FieldNameEnum.USER:
        setNewUser(event.target.value);
        break;
      case FieldNameEnum.PRODUCT:
        setNewProduct(event.target.value);
        break;
      case FieldNameEnum.AMOUNT:
        const value = parseInt(event.target.value);
        const amount = value && value > 0 ? value.toString() : "0";
        setNewProductAmount(amount);
        break;
      default:
        setNewUser(event.target.value);
        break;
    }
  };

  const handleAddUser = () => {
    dispatch(addUser(newUser));
    setNewUser("");
  };

  const handleDeleteUser = (userId: number) => {
    dispatch(deleteUser(userId));
    dispatch(recalculateAmount());
  };

  const handleAddProduct = () => {
    dispatch(addProduct({ name: newProduct, price: newProductAmount }));
    setNewProduct("");
    setNewProductAmount("0");
  };

  const handleDeleteProduct = (productId: number) => {
    dispatch(removeProduct(productId));
  };

  const handleExpandClick = (type: ExpandTypeEnum) => {
    if (type === ExpandTypeEnum.USER) {
      setExpandedUsersList(!expandedUsersList);
    } else {
      setExpandedProductsList(!expandedProductsList);
    }
  };

  return (
    <Container>
      <IconButton
        onClick={handleCloseMenu}
        sx={{ position: "absolute", top: 4, right: 4 }}
      >
        <CloseIcon />
      </IconButton>
      <StackStyled spacing={6}>
        <Box>
          <Divider variant="fullWidth">
            <Chip label="Участники" />
          </Divider>
          <InputBlock>
            <Input
              label={FieldNameEnum.USER}
              value={newUser}
              handleChangeInput={handleChangeInputValue}
            />
            <AddButton
              variant="contained"
              disabled={!newUser}
              onClick={handleAddUser}
            >
              Ok
            </AddButton>
          </InputBlock>
          {!!users.length ? (
            <CollapseList
              expanded={expandedUsersList}
              userItems={users}
              handleClickToExpand={handleExpandClick}
              handleDeleteItem={handleDeleteUser}
            />
          ) : null}
        </Box>
        <Box>
          <Box>
            <Divider variant="fullWidth">
              <Chip label="Продукты" />
            </Divider>
            <InputBlock>
              <Input
                label={FieldNameEnum.PRODUCT}
                value={newProduct}
                handleChangeInput={handleChangeInputValue}
              />
              <Input
                typeNumber
                label={FieldNameEnum.AMOUNT}
                value={newProductAmount}
                handleChangeInput={handleChangeInputValue}
              />

              <AddButton
                variant="contained"
                disabled={!newProduct || parseInt(newProductAmount) <= 0}
                onClick={handleAddProduct}
              >
                Ok
              </AddButton>
            </InputBlock>
            {!!users.length ? (
              <CollapseList
                expanded={expandedProductsList}
                productItems={products}
                handleClickToExpand={handleExpandClick}
                handleDeleteItem={handleDeleteProduct}
              />
            ) : null}
          </Box>
        </Box>
      </StackStyled>
    </Container>
  );
};

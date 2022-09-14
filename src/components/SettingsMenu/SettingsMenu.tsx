import { Box, Chip, Divider, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, addUser } from "../../app/usersSlice";
import CloseIcon from "@mui/icons-material/Close";

import { Input } from "../coms/Input";

import { AddButton, Container, InputBlock, StackStyled } from "./styles";

export enum FieldNameEnum {
  USER = "Пользователь",
  PRODUCT = "Продукт",
  AMOUNT = "Стоимость",
}

interface ISettingsMenu {
  handleCloseMenu: () => void;
}

export const SettingsMenu: React.FC<ISettingsMenu> = ({ handleCloseMenu }) => {
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState("");
  const [newProduct, setNewProduct] = useState("");
  const [newProductAmount, setNewProductAmount] = useState("0");

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

  const handleAddProduct = () => {
    dispatch(addProduct({ name: newProduct, price: newProductAmount }));
    setNewProduct("");
    setNewProductAmount("0");
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
            <Chip label="Добавить нового пользователя" />
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
        </Box>
        <Box>
          <Box>
            <Divider variant="fullWidth">
              <Chip label="Добавить продукт" />
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
          </Box>
        </Box>
      </StackStyled>
    </Container>
  );
};

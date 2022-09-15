import styled from "@emotion/styled";
import { AppBar as MuiAppBar, IconButton } from "@mui/material";

// Коды цветов в HEX (RGB):
// 1. Нежно-персиковый — FED6BC
// 2. Светло-желтый — FFFADD
// 3. Пастельно-небесный — DEF7FE
// 4. Светло-лиловый — E7ECFF
// 5. Салатовый — C3FBD8
// 6. Нежно-розовый — FDEED9
// 7. Лаймовый — F6FFF8
// 8. Аквамариновый — B5F2EA
// 9. Сиреневый — C6D8FF

export const Container = styled.div({
  flexGrow: 1,
});

export const AppBar = styled(MuiAppBar)({
  alignItems: "end",

  backgroundColor: "#C6D8FF",
  color: "black",
});

export const Button = styled(IconButton)({
  margin: "0px 4px",
});

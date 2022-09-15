import styled from "@emotion/styled";
import { Button, Stack } from "@mui/material";

export const Container = styled.div({
  position: "relative",

  width: "420px",
  height: "100%",
  display: "flex",
  flexDirection: "column",

  padding: "4px 12px",
  backgroundColor: "#C6D8FF",
});

export const InputBlock = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "end",

  padding: "0px 8px",
});

export const StackStyled = styled(Stack)({
  paddingTop: "32px",
});

export const AddButton = styled(Button)({
  marginTop: "6px",
});

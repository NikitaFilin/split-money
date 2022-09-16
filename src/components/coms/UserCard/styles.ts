import styled from "@emotion/styled";

import {
  Card as MuiCard,
  CardHeader as MuiCardHeader,
  CardContent,
  Typography,
} from "@mui/material";

export const Card = styled(MuiCard)({
  minWidth: 240,
  minHeight: 320,

  display: "flex",
  flexDirection: "column",

  alignItems: "center",

  margin: "8px 16px",

  backgroundColor: "#E7ECFF",
});

export const CardHeader = styled(MuiCardHeader)({
  padding: "16px 8px 8px 8px",

  ".MuiCardHeader-action": {
    alignSelf: "center",
  },
});

export const UserName = styled(Typography)({
  margin: "0 8px",
});

export const DividerBox = styled.div({
  width: "100%",
});

export const CheckboxContent = styled(CardContent)({
  flex: 1,
  padding: 8,
});

export const TotalAmountContent = styled(CardContent)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

export const TotalAmount = styled(Typography)({
  margin: "0 auto",
  paddingTop: 16,
});

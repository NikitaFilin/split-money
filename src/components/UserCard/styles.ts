import styled from "@emotion/styled";

import { Card as MuiCard, CardContent } from "@mui/material";

export const Card = styled(MuiCard)({
  minWidth: 200,
  minHeight: 320,

  display: "flex",
  flexDirection: "column",

  alignItems: "center",

  margin: "8px 16px",

  backgroundColor: "#E7ECFF",
});

export const Content = styled(CardContent)({
  flex: 1,
});

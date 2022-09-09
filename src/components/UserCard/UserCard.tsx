import React from "react";

import {
  CardActions,
  Button,
  CardHeader,
  IconButton,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Divider,
  Chip,
} from "@mui/material";
import { Card, Content } from "./styles";

import DeleteIcon from "@mui/icons-material/Delete";
import CardContent from "@mui/material/CardContent";
import { TProduct, TUser } from "./types";

interface IUserCard {
  products: TProduct[];
  user: TUser;
}

export const UserCard: React.FC<IUserCard> = ({ user, products }) => {
  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h6" sx={{ margin: "0 8px" }}>
            {user.name}
          </Typography>
        }
        action={
          <IconButton aria-label="settings">
            <DeleteIcon fontSize="small" />
          </IconButton>
        }
      />

      <Content>
        <FormGroup>
          {products.map((product) => (
            <FormControlLabel
              key={product.id}
              control={<Checkbox />}
              label={product.name}
            />
          ))}
        </FormGroup>
      </Content>

      <CardActions>
        <Button
          fullWidth
          size="small"
          variant="outlined"
          sx={{ backgroundColor: "#F6FFF8", color: "black" }}
        >
          Выбрать всё
        </Button>
      </CardActions>

      <CardContent
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Divider variant="fullWidth">
          <Chip label="Итого" />
        </Divider>
        <Typography component="div" variant="h6" m={"0 auto"} pt={2}>
          4343 &#8381;
        </Typography>
      </CardContent>
    </Card>
  );
};

import {
  IconButton,
  Collapse,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import {
  Delete as DeleteIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from "@mui/icons-material";

import { TProduct, TUser } from "../UserCard/types";
import { ExpandTypeEnum } from "../../SettingsMenu";

interface ICollapseList {
  expanded: boolean;
  userItems?: TUser[];
  productItems?: TProduct[];
  handleClickToExpand: (type: ExpandTypeEnum) => void;
  handleDeleteItem: (itemId: number) => void;
}

export const CollapseList: React.FC<ICollapseList> = ({
  expanded,
  userItems,
  productItems,
  handleClickToExpand,
  handleDeleteItem,
}) => {
  const isUserList = !!userItems?.length;
  return (
    <>
      <IconButton
        onClick={() =>
          handleClickToExpand(
            isUserList ? ExpandTypeEnum.USER : ExpandTypeEnum.PRODUCT
          )
        }
        aria-label="show list"
      >
        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <List>
          {(isUserList ? userItems : productItems)?.map((item: any) => (
            <ListItem
              key={item.id}
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon onClick={() => handleDeleteItem(item.id)} />
                </IconButton>
              }
            >
              <ListItemText
                primary={item.name}
                secondary={item?.price ? item?.price : null}
              />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

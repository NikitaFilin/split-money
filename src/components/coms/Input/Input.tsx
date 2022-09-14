import { InputLabel, Input as MuiInput } from "@mui/material";
import { FieldNameEnum } from "../../SettingsMenu";

import { FormControl } from "./styles";

interface IInput {
  label: FieldNameEnum;
  value: string | number;
  typeNumber?: boolean;
  handleChangeInput: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: FieldNameEnum
  ) => void;
}

export const Input: React.FC<IInput> = ({
  label,
  value,
  typeNumber,
  handleChangeInput,
}) => {
  return (
    <FormControl fullWidth variant="standard">
      <InputLabel htmlFor={`label-for-${label}`}>{label}</InputLabel>
      <MuiInput
        type={typeNumber ? "number" : ""}
        id={`label-for-${label}`}
        value={value}
        onChange={(e) => handleChangeInput(e, label)}
      />
    </FormControl>
  );
};

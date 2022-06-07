import { Typography as Text } from "@mui/material";
const cells = {
  customer_id: (prop: string) => <Text>{prop}</Text>,

  default: (value: string | number) => <Text>{value || "-"}</Text>,
};

export default cells;

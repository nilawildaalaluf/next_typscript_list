import { Box, styled, InputBase } from "@mui/material";

export const StyledCard = styled(Box)({
  border: "1px solid #E7E7E7",
  "& .MuiTypography-h6": {
    borderBottom: "none",
    padding: "26px 16px",
  },
});
export const WrapperContent = styled("div")({
  margin: "1rem",
});

export const WrapperSubTitle = styled("div")({
  marginLeft: "2rem",
  marginRight: "2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  root: { textTransform: "none" },
});
export const InputStatus = styled(InputBase)({
  "& .MuiInputBase-input": {
    fontSize: 14,
    padding: "10px 16px",
    border: "1px solid #D8D8D8",
    borderRadius: "4px",
  },
});
export const StyledSearchBox = styled(Box)({
  display: "flex",
  gap: "16px",
  alignItems: "center",
  justifyContent: "flex-start",
  marginBottom: "18px",
  marginTop: "18px",
});

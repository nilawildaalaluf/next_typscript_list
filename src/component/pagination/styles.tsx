import { Box, styled } from "@mui/material";

export const StyledContainer = styled(Box)({
  marginTop: "50px;",
  display: "flex",
});

export const StyledList = styled("ul")({
  display: "flex",
  alignItems: "center",
  border: "1px solid #D8D8D8",
  borderRadius: "4px",
  listStyle: "none",
  padding: 0,
  margin: 0,
  "& li": {
    "& button": {
      backgroundColor: "transparent",
      border: "none",
      padding: "10px 12px",
      fontSize: "14px",
      fontWeight: 600,
      color: "#707070",
      textTransform: "capitalize",
      "&:hover, &.selected": {
        backgroundColor: "#047BFE",
        color: "#FFFFFF",
      },
      "&:disabled": {
        color: "#707070",
        opacity: "0.5",
        backgroundColor: "transparent",
      },
    },
    "&:first-of-type": {
      "& button": {
        borderRadius: "4px 0px 0px 4px",
      },
    },
    "&:last-child": {
      "& button": {
        borderRadius: "0px 4px 4px 0px",
      },
    },
  },
});

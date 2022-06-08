import { useState } from "react";
import { Card, Box, Grid, Select, MenuItem } from "@mui/material";
import Header from "./PendingHeader";
import { CATEGORY } from "./constant";

import {
  WrapperContent,
  WrapperSubTitle,
  StyledSearchBox,
  InputStatus,
} from "./styles";
import Home from "./home";

const Orders = () => {
  const [filter, setFilter] = useState<string>("all");

  const filterKeys = Object.keys(CATEGORY);
  return (
    <div>
      <Header />
      <Card>
        <WrapperContent>
          <WrapperSubTitle>
            <div>Shoping List</div>
            <StyledSearchBox>
              <Select
                value={filter}
                onChange={(_e: any) => setFilter(_e.target.value)}
                input={<InputStatus />}
                sx={{ width: "200px" }}
              >
                <MenuItem key="all" value="all">
                  Pilih Category
                </MenuItem>
                {filterKeys.map((v) => {
                  const dataSearch = CATEGORY[v];
                  return (
                    <MenuItem key={v} value={v}>
                      {dataSearch}
                    </MenuItem>
                  );
                })}
              </Select>
            </StyledSearchBox>
          </WrapperSubTitle>
          <Box sx={{ padding: "18px 24px" }}>
            <Grid item md={8}>
              <Home filter={filter} />
            </Grid>
          </Box>
        </WrapperContent>
      </Card>
    </div>
  );
};

export default Orders;

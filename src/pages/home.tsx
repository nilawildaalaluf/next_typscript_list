import { useState } from "react";
import TableBasic from "../component/table";
import { Box, Typography as Text } from "@mui/material";
import { HEADER_LIST } from "./constant";
import cells from "./cells";
import { useQuery } from "react-query";
import { getShopList, getShopListWithCategory } from "./queries";

import { StyledCard } from "./styles";

const BulkUploadOrders = (filter: any) => {
  const [page, setPage] = useState<number>(1);

  const { data: historyData, isLoading } = useQuery(["GET_LIST"], async () => {
    return await getShopList();
  });

  const { data: dataByCategory, isLoading: isLoadingCategory } = useQuery(
    ["GET_LIST_CATEGORY", filter],
    async () => {
      return await getShopListWithCategory(filter);
    }
  );

  //tes
  const dataPagination = historyData?.pagination;
  const dataList = filter.filter !== "all" ? dataByCategory : historyData;

  return (
    <div style={{ marginRight: "1rem" }}>
      <StyledCard>
        <Box>
          <TableBasic
            id="table-history-bulkupload"
            edges={dataList}
            headerList={HEADER_LIST}
            totalPages={dataPagination?.total_pages}
            page={page}
            setPage={setPage}
            isLoading={isLoading}
            cells={cells}
            totalRecord={dataPagination?.total_elements}
          />
        </Box>
      </StyledCard>
    </div>
  );
};

export default BulkUploadOrders;

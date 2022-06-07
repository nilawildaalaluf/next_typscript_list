import usePagination from "@mui/material/usePagination";
import { StyledContainer, StyledList } from "./styles";
import { Box, Typography } from "@mui/material";

interface IPagination {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalRecord: number;
  pageLimit?: number;
}

const Pagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
  totalRecord,
  pageLimit = 10,
}: IPagination) => {
  const { items } = usePagination({
    count: totalPages,
    page: currentPage,
    onChange: (_e: any, page: number) => setCurrentPage(page),
  });

  const minEntry =
    totalRecord > 0 ? currentPage * pageLimit - (pageLimit - 1) : totalRecord;
  const maxEntry =
    currentPage * pageLimit > totalRecord
      ? totalRecord
      : currentPage * pageLimit;

  return (
    <StyledContainer justifyContent="space-between" alignItems="flex-end">
      <Box>
        <Typography
          variant="body2"
          fontWeight={600}
          color="#707070"
        >{`Showing ${minEntry} to ${maxEntry} of ${totalRecord} entries`}</Typography>
      </Box>
      {totalRecord > 0 && (
        <StyledList>
          {items.map(({ page, type, selected, ...item }, index) => {
            let children = null;

            if (type === "start-ellipsis" || type === "end-ellipsis") {
              children = "…";
            } else if (type === "page") {
              children = (
                <button
                  type="button"
                  className={selected ? "selected" : ""}
                  {...item}
                >
                  {page}
                </button>
              );
            } else {
              children = (
                <button type="button" {...item}>
                  {type}
                </button>
              );
            }

            return <li key={index}>{children}</li>;
          })}
        </StyledList>
      )}
    </StyledContainer>
  );
};

export default Pagination;

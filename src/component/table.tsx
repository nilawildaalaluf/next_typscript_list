import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ReactNode } from "react";
import get from "lodash.get";

import Pagination from "./pagination/pagination";

export interface HeaderProp {
  column: string;
  label: string;
  minWidth?: number;
  key?: string;
}

interface ITable {
  id: string;
  headerList?: HeaderProp[];
  edges: any;
  totalPages: number;
  page: number;
  setPage: (page: number) => void;
  totalRecord: number;
  isLoading: boolean;
  cells?: {
    [key: string]: (val: any, rowData: any, customParams: any) => ReactNode;
  };
  customParams?: {
    [key: string]: unknown;
  };
}

const TableBasic = ({
  id,
  headerList = [],
  edges,
  totalPages,
  page,
  totalRecord,
  customParams,
  cells,
  setPage,
  isLoading,
}: ITable) => {
  return (
    <>
      <TableContainer component={Paper} id={id}>
        <Table>
          <TableHead sx={{ backgroundColor: "#EFEFEF" }}>
            <TableRow>
              {headerList.map((item: HeaderProp) => (
                <TableCell
                  key={`${id}-header-${item.column}`}
                  style={{ minWidth: item.minWidth }}
                >
                  {item.label}
                </TableCell>
              ))}
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <>
                <TableRow>
                  <TableCell align="center" colSpan={headerList.length + 1}>
                    Loading ....
                  </TableCell>
                </TableRow>
              </>
            ) : (
              <>
                {edges?.length > 0 ? (
                  <>
                    {edges?.map((row: any, index: number) => {
                      return (
                        <TableRow key={`${id}-row-${index + 1}`}>
                          {headerList?.map((item) => {
                            const value = row[item.column];
                            const handleCell =
                              cells[item?.key] || cells.default;
                            const getRowValue = get(row, item.column);
                            return (
                              <TableCell
                                key={`${id}-cell-${item.column}-${index + 1}`}
                              >
                                {handleCell(getRowValue, value, customParams)}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <TableRow>
                      <TableCell align="center" colSpan={headerList.length + 1}>
                        Data Not found
                      </TableCell>
                    </TableRow>
                  </>
                )}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={page}
          setCurrentPage={setPage}
          totalRecord={totalRecord}
        />
      )}
    </>
  );
};

export default TableBasic;

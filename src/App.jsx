import React, { useContext, useEffect, useMemo, useState } from "react";
import { useTable, useSortBy } from "react-table";
import InfiniteScroll from "react-infinite-scroll-component";

import Context from "./context/Context";
import DropFileInput from "./components/DropFileInput";
import ContainerTable from "./styles/table";

function App() {
  const { data, dataParse } = useContext(Context);
  const [items, setItems] = useState([]);

  function Table({ data, update }) {
    const columnsArray = data[0].map((head) => {
      return {
        Header: head,
        accessor: head,
        maxWidth: 3000,
        minWidth: 150,
      };
    });

    const columns = useMemo(() => [
      {
        Header: "columns",
        columns: columnsArray,
        canResize: true,
      },
    ]);

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      state: { sortBy },
    } = useTable(
      {
        columns,
        data: items,
      },
      useSortBy,
    );

    useEffect(() => {
      console.log("sort");
    }, [sortBy]);

    return (
      <InfiniteScroll
        dataLength={rows.length}
        next={() => update(rows.length, rows.length + 30)}
        hasMore={true}
        loader={<h4>Loading more 30 itens...</h4>}
      >
        <table id='table' {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps({
                      style: {
                        minWidth: column.minWidth,
                        maxWidth: column.maxWidth,
                      },
                    })}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </InfiniteScroll>
    );
  }

  const fetchMoreData = (inicial, final) => {
    setTimeout(() => {
      setItems([...items, ...dataParse.slice(inicial, final)]);
    }, 1500);
  };

  useMemo(() => setItems([...dataParse.slice(0, 30)]), [dataParse]);

  return (
    <>
      <DropFileInput />
      <ContainerTable>
        {data.length > 0 && dataParse.length > 0 ? (
          <>
            <Table data={data} update={fetchMoreData} />
          </>
        ) : null}
      </ContainerTable>
    </>
  );
}
export default App;

import { FC } from "react";
import { Table as BSTable } from "react-bootstrap";
import { useTable } from "react-table";

interface TableProps {
  data: any[];
  columns: any;
  onSelect?: (row: any) => void
}

const Table: FC<TableProps> = ({ data, columns, onSelect }) => {
  const table = useTable({ columns, data: data ?? [] });

  const selectRow = (event: any, row: any) => {
    if (event.detail === 2) {
        onSelect?.(row);
    }
  }

  const { headerGroups, getTableBodyProps, rows, prepareRow } = table;
  return (
    <BSTable striped bordered hover variant="light" className="fs-08">
    <thead>
       {// Loop over the header rows
       headerGroups.map((headerGroup: any) => (
         // Apply the header row props
         <tr {...headerGroup.getHeaderGroupProps()}>
           {// Loop over the headers in each row
           headerGroup.headers.map((column: any) => (
             // Apply the header cell props
             <th {...column.getHeaderProps()}>
               {// Render the header
               column.render('Header')}
             </th>
           ))}
         </tr>
       ))}
     </thead>
     <tbody {...getTableBodyProps()}>
       {// Loop over the table rows
       rows.map((row: any) => {
         // Prepare the row for display
         prepareRow(row)
         return (
           // Apply the row props
           <tr {...row.getRowProps()} onClick={(event) => selectRow(event, row.original)}>
             {// Loop over the rows cells
             row.cells.map((cell: any) => {
               // Apply the cell props
               return (
                 <td {...cell.getCellProps()}>
                   {// Render the cell contents
                   cell.render('Cell')}
                 </td>
               )
             })}
           </tr>
         )
       })}
     </tbody>
    </BSTable>
  );
};

export default Table;

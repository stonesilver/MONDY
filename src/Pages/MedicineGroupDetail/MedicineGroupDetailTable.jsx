import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import SortOrderIcon from '../../components/SortOrderIcon';
import {
  medicineGroupDetailRows,
  medicineGroupDetailTableTitle,
  headerStyle,
} from '../../assets/data';
import { Link } from 'react-router-dom';

const MedicineGroupDetailTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label='table'>
          {/* Table head */}
          <TableHead>
            <TableRow>
              {medicineGroupDetailTableTitle.map((item, index) => (
                <TableCell key={item} sx={headerStyle}>
                  {item}{' '}
                  {index + 1 !== medicineGroupDetailTableTitle.length && (
                    <SortOrderIcon />
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {/* Table body */}
          <TableBody>
            {medicineGroupDetailRows.map(
              ({ groupName, NoOfMedicine, action }, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{groupName}</TableCell>
                  <TableCell>{NoOfMedicine}</TableCell>
                  <Link to={`${groupName.replaceAll(' ', '-')}`}>
                    <TableCell sx={{ color: 'red.main' }}>{action}</TableCell>
                  </Link>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* page pagination */}
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={medicineGroupDetailRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default MedicineGroupDetailTable;

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs, protein: 'View Full Detail' };
}

const rows = [
  createData(
    'Augmentin 625 Duo Tablet',
    'D06ID232435454',
    'Generic Medicine',
    350
  ),
  createData('Azithral 500 Tablet', 'D06ID232435451', 'Generic Medicine', 20),
  createData('Ascoril LS Syrup', 'D06ID232435452', 'Diabetes ', 85),
  createData('Azee 500 Tablet', 'D06ID232435450', 'Generic Medicine', 75),
  createData('Allegra 120mg Tablet', 'D06ID232435455', 'Diabetes', 44),
  createData('Alex Syrup', 'D06ID232435456', 'Generic Medicine', 65),
  createData('Amoxyclav 625 Tablet', 'D06ID232435457', 'Generic Medicine', 150),
  createData('Avil 25 Tablet', 'D06ID232435458', 'Generic Medicine', 270),
];

const headerStyle = { fontSize: 16, fontWeight: 500 };

const MedicineListTable = () => {
  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table sx={{ minWidth: 650 }} aria-label='table'>
        <TableHead>
          <TableRow>
            <TableCell sx={headerStyle}>Medicine Name</TableCell>
            <TableCell sx={headerStyle}>Medicine ID</TableCell>
            <TableCell sx={headerStyle}>Group Name</TableCell>
            <TableCell sx={headerStyle}>Stock in Qty</TableCell>
            <TableCell sx={headerStyle}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell>{row.carbs}</TableCell>
              <TableCell>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MedicineListTable;

const createData = (medicineName, id, groupName, quantityInStock) => ({
  medicineName,
  id,
  groupName,
  quantityInStock,
  action: 'View Full Detail',
});

export const rows = [
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

export const tableTitle = [
  'Medicine Name',
  'Medicine ID',
  'Group Name',
  'Stock in Qty',
  'Action',
];

export const headerStyle = { fontSize: 14, fontWeight: 700 };

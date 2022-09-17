const createMedicineListData = (
  medicineName,
  id,
  groupName,
  quantityInStock
) => ({
  medicineName,
  id,
  groupName,
  quantityInStock,
  action: 'View Full Detail',
});

const createMedicinegroupData = (groupName, NoOfMedicine) => ({
  groupName,
  NoOfMedicine,
  action: 'View Full Detail',
});

const createMedicinegroupDetailData = (medicineName, NoOfMedicine) => ({
  medicineName,
  NoOfMedicine,
  action: 'Remove from Group',
});

export const medicineListRows = [
  createMedicineListData(
    'Augmentin 625 Duo Tablet',
    'D06ID232435454',
    'Generic Medicine',
    350
  ),
  createMedicineListData(
    'Azithral 500 Tablet',
    'D06ID232435451',
    'Generic Medicine',
    20
  ),
  createMedicineListData('Ascoril LS Syrup', 'D06ID232435452', 'Diabetes ', 85),
  createMedicineListData(
    'Azee 500 Tablet',
    'D06ID232435450',
    'Generic Medicine',
    75
  ),
  createMedicineListData(
    'Allegra 120mg Tablet',
    'D06ID232435455',
    'Diabetes',
    44
  ),
  createMedicineListData(
    'Alex Syrup',
    'D06ID232435456',
    'Generic Medicine',
    65
  ),
  createMedicineListData(
    'Amoxyclav 625 Tablet',
    'D06ID232435457',
    'Generic Medicine',
    150
  ),
  createMedicineListData(
    'Avil 25 Tablet',
    'D06ID232435458',
    'Generic Medicine',
    270
  ),
];

export const medicineGroupRows = [
  createMedicinegroupData('Generic Medicine', 2),
  createMedicinegroupData('Diabetes', 32),
];

export const medicineGroupDetailRows = [
  createMedicinegroupDetailData('Augmentin 625 Duo Tablet', 22),
  createMedicinegroupDetailData('Azithral 500 Tablet', 8),
];

export const medicineListTableTitle = [
  'Medicine Name',
  'Medicine ID',
  'Group Name',
  'Stock in Qty',
  'Action',
];

export const medicineGroupTableTitle = [
  'Group Name',
  'No of Medicine',
  'Action',
];

export const medicineGroupDetailTableTitle = [
  'Medicine Name',
  'No of Medicine',
  'Action',
];

export const headerStyle = { fontSize: 14, fontWeight: 700 };

export const rowStat = [
  {
    category: 'Inventory',
    more: '',
    details: [
      {
        count: '298',
        description: 'Medicine ID',
      },
      {
        count: '24',
        description: 'Medicine Groups',
      },
    ],
  },
  {
    category: 'Inventory in Qty',
    more: 'Send Stock Request',
    details: [
      {
        count: '298',
        description: 'Lifetime Supply',
      },
      {
        count: '290',
        description: 'Lifetime Sales',
      },
      {
        count: '08',
        description: 'Stock Left',
      },
    ],
  },
];

export const columnStat = [
  {
    category: 'How to use',
    text: 'Take this medication by mouth with or without food as directed by your doctor, usually once daily.',
  },
  {
    category: 'Side Effects',
    text: 'Dizziness, lightheadedness, drowsiness, nausea, vomiting, tiredness, excess saliva/drooling, blurred vision, weight gain, constipation, headache, and trouble sleeping may occur. If any of these effects persist or worsen, consult your doctor.',
  },
];

export const chartData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const orders = [
  { id: '2485855848598', date: '01 Dec 2021  10:25' },
  { id: '2485855848566', date: '05 Dec 2021  08:34' },
  { id: '2485855848541', date: '08 Dec 2021  09:12' },
  { id: '2485855848595', date: '09 Dec 2021  10:51' },
  { id: '2485855848532', date: '12 Dec 2021  06:34' },
  { id: '2485855848587', date: '15 Dec 2021  03:49' },
  { id: '2485855848530', date: '17 Dec 2021  04:16' },
  { id: '2485855848577', date: '21 Dec 2021  11:33' },
];

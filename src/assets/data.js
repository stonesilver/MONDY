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
  createMedicinegroupData('Augmentin 625 Duo Tablet', 22),
  createMedicinegroupData('Azithral 500 Tablet', 8),
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

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { MobileDateRangePicker } from '@mui/x-date-pickers-pro/MobileDateRangePicker';

const DateRange = () => {
  const [value, setValue] = useState([null, null]);

  return (
    <LocalizationProvider
      dateAdapter={AdapterMoment}
      localeText={{ start: 'Mobile start', end: 'Mobile end' }}
    >
      <MobileDateRangePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> - </Box>
            <TextField {...endProps} />
          </>
        )}
      />
    </LocalizationProvider>
  );
};

export default DateRange;

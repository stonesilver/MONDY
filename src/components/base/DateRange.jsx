import { useState } from 'react';
import TextField from '@mui/material/TextField';
import moment from 'moment';
import Stack from '@mui/material/Stack';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

const DateRange = () => {
  const [value, setValue] = useState(moment().format());

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Stack spacing={3}>
        <MobileDatePicker
          value={moment(value).format('LL')}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{ '& .MuiInputBase-input': { height: 8 } }}
            />
          )}
        />
      </Stack>
    </LocalizationProvider>
  );
};

export default DateRange;

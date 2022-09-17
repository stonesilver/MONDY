import { useState } from 'react';
import TextField from '@mui/material/TextField';
import moment from 'moment';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

const DateRange = () => {
  const [value, setValue] = useState({
    from: moment().format(),
    to: moment().format(),
  });

  const handleChange = (newValue, key) => {
    setValue((prevS) => ({ ...prevS, [key]: newValue }));
  };

  const { from, to } = value;

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Stack direction='row' alignItems='center'>
        <MobileDatePicker
          value={moment(from).format('LL')}
          onChange={(newValue) => {
            handleChange(newValue, 'from');
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{
                '& .MuiInputBase-input': {
                  height: 8,
                  bgcolor: '#b7c1ca6e',
                },
              }}
            />
          )}
        />
        <Box mx={1}>-</Box>
        <MobileDatePicker
          value={moment(to).format('LL')}
          onChange={(newValue) => {
            handleChange(newValue, 'to');
          }}
          minDate={moment(from).format('LL')}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{
                '& .MuiInputBase-input': {
                  height: 8,
                  bgcolor: '#b7c1ca6e',
                },
              }}
            />
          )}
        />
      </Stack>
    </LocalizationProvider>
  );
};

export default DateRange;

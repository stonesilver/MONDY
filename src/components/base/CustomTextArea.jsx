import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const CustomTextArea = ({ label, value, handleChange }) => {
  return (
    <Box>
      <Typography mb={1}>{label}</Typography>
      <TextareaAutosize
        value={value}
        handleChange={handleChange}
        aria-label='textarea'
        style={{
          width: '100%',
          height: 96,
          backgroundColor: '#E3EBF3',
          borderRadius: '4px',
        }}
      />
    </Box>
  );
};

export default CustomTextArea;

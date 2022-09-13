import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const CustomTextArea = ({ label, value, name, handleChange }) => {
  return (
    <Box>
      <Typography mb={1}>{label}</Typography>
      <TextareaAutosize
        value={value}
        name={name}
        onChange={handleChange}
        aria-label='textarea'
        style={{
          width: '100%',
          height: 96,
          backgroundColor: '#E3EBF3',
          color: '#1D242E',
          borderRadius: '4px',
          padding: '0.5rem 1rem',
        }}
      />
    </Box>
  );
};

export default CustomTextArea;

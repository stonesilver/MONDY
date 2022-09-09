import Button from '@mui/material/Button';

const TButton = ({
  icon,
  text,
  bgColor,
  textColor,
  size,
  variant,
  ...props
}) => {
  return (
    <Button
      variant={variant}
      startIcon={icon ? icon : null}
      size={size}
      sx={{ bgcolor: bgColor, color: textColor, ...props }}
    >
      {text}
    </Button>
  );
};

TButton.defaultProps = {
  textColor: 'white.main',
  size: 'large',
};

export default TButton;

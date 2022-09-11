import Button from '@mui/material/Button';

const TButton = ({
  icon,
  text,
  bgColor,
  textColor,
  size,
  variant,
  handleClick,
  ...props
}) => {
  return (
    <Button
      variant={variant}
      startIcon={icon ? icon : null}
      size={size}
      sx={{
        bgcolor: bgColor,
        color: textColor,
        ...props,
        '&:hover': { bgcolor: bgColor, transform: 'scale(1.03)', ...props },
      }}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};

TButton.defaultProps = {
  textColor: 'white.main',
  size: 'large',
  handleClick: () => {},
};

export default TButton;

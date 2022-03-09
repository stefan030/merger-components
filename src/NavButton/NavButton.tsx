import { StyledNavButton, StyledLabel } from "./styles";
import { NavButtonProps } from "./types";

const NavButton: React.FC<NavButtonProps> = ({
  light,
  children,
  secondary,
  leadingIcon,
  trailingIcon,
  small,
  className,
  onMouseEnter,
  onMouseLeave,
  open,
  ...rest
}) => {
  return (
    <StyledNavButton
      light={light}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      open={open}
      {...rest}
    >
      {leadingIcon && <div>{leadingIcon}</div>}
      <StyledLabel
        secondary={secondary}
        small={small}
        leadingIcon={leadingIcon}
        trailingIcon={trailingIcon}
      >
        {children}
      </StyledLabel>
      {trailingIcon && <div>{trailingIcon}</div>}
    </StyledNavButton>
  );
};

export default NavButton;

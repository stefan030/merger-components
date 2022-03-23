import { StyledLinkDropdown, StyledLink } from "./styles";
import { LinkDropdownProps } from "./types";

const LinkDropdown = ({
  items,
  className,
  anchorEl,
  open,
  onMouseEnter,
  onMouseLeave,
  ref,
  ...rest
}: LinkDropdownProps) => {
  return (
    <StyledLinkDropdown
      anchorEl={anchorEl}
      open={open}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      items={items}
      ref={ref}
      {...rest}
    >
      {items.map((item) => {
        return <StyledLink>{item.text}</StyledLink>;
      })}
    </StyledLinkDropdown>
  );
};

export default LinkDropdown;

import { NavTabProps } from "./types";
import { StyledNavTab, Text } from "./styles";
import { useNavigation } from "../NavigationContext";

const NavTab = ({
  selectable = false,
  selected = false,
  disabled = false,
  children,
  ...rest
}: NavTabProps) => {
  return (
    <StyledNavTab
      selectable={selectable}
      selected={selected}
      disabled={disabled}
      {...rest}
    >
      <Text>{children}</Text>
    </StyledNavTab>
  );
};

export default NavTab;

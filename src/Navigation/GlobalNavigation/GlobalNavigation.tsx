import { StyledGlobalNavigation, StyledBuContainer } from "./styles";
import NavButton from "../NavButton";
import NavTab from "../NavTab/NavTab";
import { SystemIcon } from "@dfds-ui/icons";
import { NavigationItem } from "../types";
import { useNavigation } from "../NavigationContext";

const GlobalNavigation = () => {
  const { navigationItems, globalSelected, setGlobalSelected } =
    useNavigation();

  console.log;

  return (
    <StyledGlobalNavigation>
      <StyledBuContainer>
        {navigationItems?.map((item: NavigationItem) => {
          return (
            <NavTab
              key={item.text}
              selected={item.text === globalSelected}
              selectable
              onClick={() => setGlobalSelected(item.text)}
            >
              {item.text}
            </NavTab>
          );
        })}
      </StyledBuContainer>
      <div>
        <NavButton
          light
          small
          trailingIcon={<SystemIcon icon="Account" css="" />}
        >
          Sign in / Register
        </NavButton>
      </div>
    </StyledGlobalNavigation>
  );
};

export default GlobalNavigation;

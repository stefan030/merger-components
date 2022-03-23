import React, { useContext, useState, useRef, useEffect } from "react";
import {
  StyledContextualNavigation,
  StyledContextualNavigationLinksContainer,
  StyledSearchAndHelpSection,
  StyledSearchButton,
  StyledDivider,
  StyledNavButton,
} from "./styles";
import { Logo } from "@dfds-ui/react-components/logo";
import { NavigationContext } from "../NavigationContext";
import { SystemIcon } from "@dfds-ui/icons";
import LinkDropdown from "../LinkDropdown/LinkDropdown";

const ContextualNavigation = () => {
  const { globalSelected } = useContext(NavigationContext);
  const contextualNavigationItems = globalSelected?.childrenCollection?.items;

  const ref = React.useRef(null);

  const [mouseOverButton, setMouseOverButton] = useState(false);
  const [mouseOverMenu, setMouseOverMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [setFocus, isFocused] = useState();

  // Button Enter
  const openMenuOnButtonEnter = (event) => {
    setMouseOverButton(true);
    setAnchorEl(event.currentTarget);
    // ref?.current?.focus()
    // setFocus(ref.onfocus)

    // anchorEl.focus()
  };

  // Button Leave
  const closeMenuOnButtonLeave = () => {
    setAnchorEl(null);
    setMouseOverButton(false);
    setMouseOverMenu(false);
  };

  // Menu Enter
  const persistMenuOpenOnMenuEnter = () => {
    setMouseOverMenu(true);
  };

  // Menu Leave
  const closeMenuOnMenuLeave = () => {
    setMouseOverMenu(false);
  };

  // useEffect(() => {
  //   if (mouseOverButton) {
  //     anchorEl.focus()
  //   }
  // }, [mouseOverButton])

  const open = mouseOverButton || mouseOverMenu;

  return (
    <StyledContextualNavigation>
      <div>
        <Logo height="2rem" />
      </div>
      <StyledContextualNavigationLinksContainer>
        {contextualNavigationItems &&
          contextualNavigationItems.map((item, index) => {
            if (item.childrenCollection.items.length > 0) {
              return (
                <div>
                  <StyledNavButton
                    onMouseEnter={openMenuOnButtonEnter}
                    onMouseLeave={closeMenuOnButtonLeave}
                    open={open}
                    // onFocus={() => setMouseOverButton(true)}
                    // onBlur={() => setMouseOverButton(false)}
                  >
                    {item.text}
                  </StyledNavButton>
                  {item.childrenCollection.items && (
                    <LinkDropdown
                      anchorEl={anchorEl}
                      open={open}
                      onMouseEnter={persistMenuOpenOnMenuEnter}
                      onMouseLeave={closeMenuOnMenuLeave}
                      items={item?.childrenCollection?.items}
                    />
                  )}
                </div>
              );
            } else {
              return (
                <StyledNavButton className="nav-button">
                  {item.text}
                </StyledNavButton>
              );
            }
          })}
      </StyledContextualNavigationLinksContainer>
      <div>
        <StyledSearchAndHelpSection>
          <StyledSearchButton
            variation="text"
            icon={<SystemIcon icon="Search" css="" />}
            iconAlign="left"
          >
            Search
          </StyledSearchButton>
          <StyledDivider />
          <StyledSearchButton variation="text">Help</StyledSearchButton>
        </StyledSearchAndHelpSection>
      </div>
    </StyledContextualNavigation>
  );
};

export default ContextualNavigation;

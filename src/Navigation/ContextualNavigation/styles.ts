import styled from "@emotion/styled";
import { theme } from "@dfds-ui/theme";
import { Button } from "@dfds-ui/react-components";
import NavButton from "../NavButton";

export const StyledContextualNavigation = styled.div`
  align-items: center;
  background-color: ${theme.colors.surface.primary};
  display: flex;
  height: 68px;
  justify-content: space-between;
  padding: 0 40px;
`;

export const StyledContextualNavigationLinksContainer = styled.div`
  align-items: center;
  display: flex;
  position: relative;

  & > *:not(:first-child) {
    margin-left: ${theme.spacing.m};
  }
`;

export const StyledNavButton = styled(NavButton)`
  position: relative;
  display: inline-block;

  ${(props) => props.open}::after {
    content: "";
    height: 80px;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

export const StyledSearchAndHelpSection = styled.div`
  align-items: center;
  display: flex;
  position: relative;
`;

export const StyledSearchButton = styled(Button)`
  color: ${theme.colors.text.primary.primary};

  &:hover {
    color: ${theme.colors.text.primary.primary};
  }
`;

export const StyledDivider = styled.div`
  border-left: 1px solid ${theme.colors.primary.main};
  height: 24px;
  margin: 0px ${theme.spacing.xs};
`;

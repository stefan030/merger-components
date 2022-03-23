import styled from "@emotion/styled";
import { LinkDropdownProps } from "./types";
import { theme } from "@dfds-ui/theme";
import { typography } from "@dfds-ui/typography";

export const StyledLinkDropdown = styled.div<LinkDropdownProps>`
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  background-color: ${theme.colors.surface.primary};
  min-width: 190px;
  box-shadow: ${theme.elevation[4]};
  z-index: 2;
  margin-top: 20px;
`;

export const StyledLink = styled.span`
  ${typography.bodyInterface}
  padding: ${theme.spacing.s};
  color: ${theme.colors.text.dark.primary};
  cursor: pointer;
`;

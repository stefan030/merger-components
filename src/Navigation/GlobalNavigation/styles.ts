import styled from "@emotion/styled";
import { theme } from "@dfds-ui/theme";

export const StyledGlobalNavigation = styled.div`
  align-items: center;
  background-color: ${theme.colors.surface.tertiary};
  display: flex;
  height: 3rem;
  justify-content: space-between;
  padding: 0 2.5rem;
`;

export const StyledBuContainer = styled.div`
  align-items: center;
  display: flex;

  & div:not(:first-child) {
    margin-left: ${theme.spacing.xxs};
  }
`;

import { NavButtonProps } from "./types";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { theme } from "@dfds-ui/theme";
import { typography } from "@dfds-ui/typography";

export const StyledNavButton = styled.button<NavButtonProps>`
  // Primary Dark
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: 28px;
  cursor: pointer;
  color: ${theme.colors.text.primary.primary};
  position: relative;
  border: none;
  outline: 0;
  background: none;

  // Resting (Hover)
  &:hover {
    & > span {
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: ${theme.colors.surface.tertiary};
        height: 2px;
        border-radius: 2px;
      }
    }
  }

  // Pressed (Active)
  &:active {
    color: ${theme.colors.text.secondary.primary};
    border: 2px solid ${theme.colors.secondary.main};

    & > span {
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: ${theme.colors.secondary.main};
        height: 2px;
        border-radius: 2px;
      }
    }
  }

  &:focus {
    border: 2px solid ${theme.colors.secondary.main};
    color: ${theme.colors.text.secondary.primary};
  }

  /* Primary Light  */

  //Resting (Hover)
  ${({ light }) =>
    light &&
    css`
      color: ${theme.colors.text.light.primary};

      &:hover {
        & > span {
          &:after {
            background: ${theme.colors.surface.primary};
          }
        }
      }

      // Pressed (Active)
      &:active {
        color: ${theme.colors.text.secondary.primary};

        & > span {
          &:after {
            background: ${theme.colors.secondary.main};
          }
        }
      }
    `}

  //Secondary Light (Pressed)
  ${({ secondary }) =>
    secondary &&
    css`
      color: ${theme.colors.text.light.primary};

      &:hover {
        & > span {
          &:after {
            background: ${theme.colors.surface.primary};
          }
        }
      }
    `}
`;

export const StyledLabel = styled.span<NavButtonProps>`
  ${typography.labelBold};

  /* Secondary Dark  */
  ${({ secondary }) =>
    secondary &&
    css`
      ${typography.label};
    `}

  ${({ small }) =>
    small &&
    css`
      ${typography.labelSmall};
    `}

    ${({ leadingIcon }) =>
    leadingIcon &&
    css`
      padding-left: ${theme.spacing.xxs};
    `}

    ${({ trailingIcon }) =>
    trailingIcon &&
    css`
      padding-right: ${theme.spacing.xxs};
    `}
`;

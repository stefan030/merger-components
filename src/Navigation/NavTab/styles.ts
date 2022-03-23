import { NavTabProps } from "./types";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { theme } from "@dfds-ui/theme";
import { typography } from "@dfds-ui/typography";

export const NavTabContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledNavTab = styled.button<NavTabProps>`
  align-items: center;
  border-radius: ${theme.radii.m};
  border: ${theme.borders.widths.s} solid transparent;
  color: ${theme.colors.text.light.primary};
  cursor: pointer;
  display: flex;
  height: 1.5rem;
  justify-content: center;
  line-height: normal;
  max-width: 100%;
  background: none;
  outline: 0;

  ${({ selectable, selected }) =>
    selectable &&
    css`
      &:hover {
        border: ${theme.borders.widths.s} solid ${theme.colors.surface.primary};
        color: ${theme.colors.text.light.primary};
      }

      // Remove persistent focus on mouse click
      &:focus:not(:focus-visible) {
        outline: none;
      }

      &:focus-visible {
        border: ${theme.borders.widths.s} solid ${theme.colors.secondary.main};
        color: ${theme.colors.text.secondary.primary};
      }

      &:active {
        border: ${theme.borders.widths.s} solid ${theme.colors.secondary.main};
        color: ${theme.colors.text.secondary.primary};
      }

      ${selected &&
      css`
        border: ${theme.borders.widths.s} solid ${theme.colors.surface.primary};
        color: ${theme.colors.text.light.primary};

        &:hover {
          border: ${theme.borders.widths.s} solid
            ${theme.colors.surface.primary};
          color: ${theme.colors.text.light.primary};
        }
      `}
    `};

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${theme.colors.text.dark.disabled};
      cursor: not-allowed;

      &:hover {
        border: none;
        color: ${theme.colors.text.dark.disabled};
      }
    `}
`;

export const Text = styled.span`
  ${typography.labelSmall};
  line-height: ${theme.spacing.s};
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

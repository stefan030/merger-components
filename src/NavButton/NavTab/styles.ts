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
  border: 1px solid transparent;
  color: ${theme.colors.text.light.primary};
  cursor: pointer;
  display: flex;
  height: 1.5rem;
  justify-content: center;
  line-height: normal;
  max-width: 100%;
  padding: 0.375rem 0.5rem;
  background: none;

  ${({ selectable, selected }) =>
    selectable &&
    css`
      &:hover {
        border: ${theme.borders.widths.s} solid ${theme.colors.surface.primary};
        color: ${theme.colors.text.light.primary};
      }

      &:focus,
      &:active {
        border: ${theme.borders.widths.s} solid ${theme.colors.secondary.main};
        color: ${theme.colors.text.secondary.primary};
      }

      ${selected &&
      css`
        border: ${theme.borders.widths.s} solid ${theme.colors.surface.primary};
        color: ${theme.colors.text.light.primary};

        &:hover,
        &:focus {
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

import styled, { css } from 'styled-components';
import { PreviewContainerProps } from 'types';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    grid-area: preview;

    background: ${theme.colors.border};
    overflow: hidden;
    width: 100%;
    height: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: ${theme.border.radius};
  `}
`;

export const TopBar = styled.div`
  ${({ theme }) => css`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    background: ${theme.colors.primary};
    height: 1.6rem;
    padding: 0 ${theme.spacings.xsmall};
  `}
`;

export const Dot = styled.span`
  ${({ theme }) => css`
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${theme.colors.border};

    & + & {
      margin: 0;
      margin-left: 4px;
    }
  `}
`;

export const PreviewWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    padding: ${theme.spacings.medium};
  `}
`;

export const Preview = styled.div<PreviewContainerProps>`
  ${({ styles }) => css`
    display: flex;
    justify-content: center;
    width: 100%;

    ${() => styles}
  `}
`;

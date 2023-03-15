import styled, { css } from 'styled-components';

export const Container = styled.input`
  ${({ theme }) => css`
    -webkit-appearance: none;
    width: 100%;
    height: 8px;
    background: ${theme.colors.text};
    border-radius: ${theme.border.radius};
    background-image: linear-gradient(
      ${theme.colors.primary},
      ${theme.colors.primary}
    );
    background-repeat: no-repeat;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
      background: ${theme.colors.primary};
      cursor: ew-resize;
      transition: background 0.3s ease-in-out;
    }

    &::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      box-shadow: none;
      border: none;
      background: transparent;
    }
  `}
`;

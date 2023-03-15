import styled, { css } from 'styled-components';

type ContainerProps = {
  hasSelect: boolean;
};

const containerModifiers = {
  hasSelect: () => css`
    grid-template-rows: 3.2rem 1fr;
  `,
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, hasSelect }) => css`
    display: grid;
    grid-template-columns: repeat(2, minmax(20rem, 1fr));
    grid-template-rows: 2rem 1fr;

    grid-template-areas: 'input buttons' 'code preview';
    grid-gap: 1.6rem;

    width: 100%;
    margin-top: 3.2rem;
    border-radius: ${theme.border.radius};

    ${hasSelect && containerModifiers.hasSelect}
  `}
`;

export const Pre = styled.pre`
  ${({ theme }) => css`
    grid-area: code;
    background: ${theme.colors.border};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    padding: 1.2rem 0.8rem;
    border-radius: ${theme.border.radius};
    display: flex;
    align-items: center;

    overflow-x: scroll;
    overflow-y: hidden;

    code {
      line-height: 1.6;
      color: ${theme.colors.text};
    }

    span {
      color: ${theme.colors.tertiary};
    }

    &::-webkit-scrollbar {
      height: 0.8rem;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.primary};
      border-radius: 0px 0px ${theme.border.radius} ${theme.border.radius};
    }
  `}
`;

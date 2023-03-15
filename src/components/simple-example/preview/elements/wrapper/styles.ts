import styled, { css } from 'styled-components';
import { PreviewElementData } from 'types';

export const Container = styled.div<PreviewElementData>`
  ${({ theme, styles = {}, isTarget }) => css`
    width: 100%;
    border-width: 5px;
    border-style: solid;
    border-color: ${theme.colors[isTarget ? 'primary' : 'tertiary']};

    ${() => (isTarget ? styles : undefined)}
  `}
`;

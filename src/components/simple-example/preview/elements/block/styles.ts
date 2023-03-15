import styled, { css } from 'styled-components';
import { PreviewElementData } from 'types';

export const Container = styled.div<PreviewElementData>`
  ${({ theme, styles = {}, isTarget }) => {
    const mainColor = theme.colors[isTarget ? 'primary' : 'tertiary'];

    return css`
      width: 5rem;
      height: 5rem;
      background: ${mainColor};
      border-color: ${mainColor};

      ${() => (isTarget ? styles : undefined)}
    `;
  }}
`;

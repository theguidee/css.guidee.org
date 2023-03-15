import styled, { css } from 'styled-components';
import { PreviewElementData } from 'types';

export const Container = styled.p<PreviewElementData>`
  ${({ styles = {}, isTarget }) => css`
    ${() => (isTarget ? styles : undefined)}
  `}
`;

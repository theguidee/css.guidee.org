import { PreviewElementProps } from 'types';
import { previewElsMap } from '..';

import * as S from './styles';

export const Wrapper = ({ data, children }: PreviewElementProps) => {
  return (
    <S.Container {...data}>
      {children.map((el, i) => {
        const El = previewElsMap.get(el.type);

        return <El key={i} {...el.data} />;
      })}
    </S.Container>
  );
};

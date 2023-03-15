import { PreviewContainerProps, PreviewElement } from 'types';
import { previewElsMap } from './elements';

import * as S from './styles';

type PreviewProps = {
  props?: PreviewContainerProps;

  styles: Record<string, string | number>;
  els: PreviewElement[];
};

export const Preview = ({ els, props, styles }: PreviewProps) => {
  return (
    <S.Container>
      <S.TopBar>
        <S.Dot />
        <S.Dot />
        <S.Dot />
      </S.TopBar>

      <S.PreviewWrapper>
        <S.Preview {...props}>
          {els.map((el, i) => {
            const El = previewElsMap.get(el.type);

            const elProps = {
              ...el.data,
              isTarget: els.length === 1 || el.data?.isTarget || undefined,
              styles: { ...styles, ...el.data?.styles },
            };

            return (
              <El key={i} data={elProps}>
                {el.children}
              </El>
            );
          })}
        </S.Preview>
      </S.PreviewWrapper>
    </S.Container>
  );
};

import { PreviewElementProps } from 'types';
import * as S from './styles';

export const Text = ({ data }: PreviewElementProps) => {
  return (
    <S.Container {...data}>{data.content || 'Texto para editar'}</S.Container>
  );
};

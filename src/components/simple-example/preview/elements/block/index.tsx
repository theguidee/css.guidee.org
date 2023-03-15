import { PreviewElementProps } from 'types';
import * as S from './styles';

export const Block = ({ data }: PreviewElementProps) => {
  return <S.Container {...data} />;
};

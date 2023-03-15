import { useState } from 'react';

import { Inputs, StylePropertyNames } from 'types';
import { Preview } from './preview';

import { inputsMap } from 'components';
import { exemplesMap } from './examples';

import * as S from './styles';

type SimpleExampleProps = {
  property: StylePropertyNames;
};

const DEFAULT_FORMATER = (value: number | string) => value;

export const SimpleExample = ({ property }: SimpleExampleProps) => {
  const data = exemplesMap.get(property);

  const {
    type: inputType,
    formater = DEFAULT_FORMATER,
    props: inputProps,
  } = data.input;

  const [style, setStyle] = useState(formater(inputProps?.defaultValue));

  const Input = inputsMap.get(inputType);

  const handleChangeStyle = (value: string | number) => {
    setStyle(formater(value ?? ''));
  };

  const hasSelect = inputType === Inputs.SELECT;

  return (
    <S.Container hasSelect={hasSelect}>
      <Input onChange={handleChangeStyle} {...inputProps} />

      <S.Pre>
        <code>
          {'.target {\n'}
          &#xa0;&#xa0;<span>{property}</span>:&#xa0;
          {style};{'\n'}
          {'}'}
        </code>
      </S.Pre>

      <Preview {...data.preview} styles={{ [property]: style }} />
    </S.Container>
  );
};

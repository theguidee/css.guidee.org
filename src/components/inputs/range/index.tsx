import { InputHTMLAttributes, useEffect, useRef } from 'react';
import * as S from './styles';

type RangeProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'onChange' | 'onInput'
> & {
  onChange?: (value: number) => void;
  onInput?: (value: number) => void;
};

export const Range = ({
  min = 0,
  max = 100,
  onInput,
  onChange,
  ...rest
}: RangeProps) => {
  const rangeInput = useRef<HTMLInputElement>(null);

  const handleInput = () => {
    const input = rangeInput.current;

    const { min, max, value } = input;
    const percentage = ((+value - +min) * 100) / (+max - +min);

    input.style.backgroundSize = `${percentage}% 100%`;

    onChange && onChange(+value);
    onInput && onInput(+value);
  };

  useEffect(() => {
    handleInput();
  }, []);

  return (
    <S.Container
      ref={rangeInput}
      type="range"
      onInput={handleInput}
      min={min}
      max={max}
      {...rest}
    />
  );
};

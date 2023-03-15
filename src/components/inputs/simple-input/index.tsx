import {
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

import * as S from './styles';

export type SimpleInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  label?: string;
  error?: string;
  onChange?: (value: string) => void;
};

const SimpleInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  SimpleInputProps
> = ({ label, error, className, onChange, ...rest }: SimpleInputProps, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => inputRef.current!);

  const handleChange = () => {
    const value = inputRef.current.value;

    onChange && onChange(value);
  };

  useEffect(() => {
    inputRef.current!.value = (rest.defaultValue as string) || '';
  }, [rest.defaultValue]);

  return (
    <S.Container className={className}>
      {label && <S.Label>{label}</S.Label>}

      <S.Input ref={inputRef} onChange={handleChange} {...rest} />

      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
};

const FowardSimpleInput = forwardRef(SimpleInput);
export { FowardSimpleInput as SimpleInput };

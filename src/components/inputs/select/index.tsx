import { FocusEvent, useEffect, useRef, useState } from 'react';
import { X as CloseIcon } from 'phosphor-react';

import { useForceUpdate } from 'hooks';
import { debounce, filterArrayByQueryMatch } from 'utils';

import * as S from './styles';

type SelectOption = {
  label: string;
  value: string;
  disable?: boolean;
};

type SelectProps = {
  label?: string;
  defaultValue?: unknown;
  onChange?: (value: string) => void;
  placeholder?: string;
  clearable?: boolean;
  options?: SelectOption[];
};

export const Select = ({
  label,
  defaultValue,
  options = [],
  onChange,
  ...rest
}: SelectProps) => {
  const defaultPlaceholder = 'Escolha uma opção';

  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const forceUpdate = useForceUpdate();

  const [selectedOption, setSelectedOption] = useState<
    SelectOption | undefined
  >(options.find(option => option.value === defaultValue));

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isToUpDropdown, setIsToUpDropdown] = useState(false);

  const clearInputValue = () => (inputRef.current!.value = '');

  const handleSelect = (option?: SelectOption) => () => {
    setSelectedOption(option);
    clearInputValue();

    setIsDropdownOpen(false);

    const value = option?.value || '';
    onChange && onChange(value);
  };

  const handleBlur = (event: FocusEvent) => {
    if (dropdownRef.current?.contains(event.relatedTarget as Node)) return;

    setIsDropdownOpen(false);
    clearInputValue();
  };

  useEffect(() => {
    const marginToBottom = 40;
    const translate = 10;

    const dropdown = dropdownRef.current;

    const offsetBottom = dropdown?.getBoundingClientRect().bottom || 0;
    const windownHeight = window.innerHeight - marginToBottom;

    setIsToUpDropdown(offsetBottom - translate > windownHeight);
  }, []);

  useEffect(() => {
    const option = options.find(option => option.value === defaultValue);

    setSelectedOption(option);
  }, [defaultValue]);

  const { value = '' } = inputRef.current || {};

  const filteredOptions = filterArrayByQueryMatch(value, options, ['label']);
  const canShowClearButton = !!selectedOption && !!rest.clearable;

  const placeholder =
    selectedOption?.label || rest.placeholder || defaultPlaceholder;

  return (
    <S.Container>
      <S.Input
        label={label}
        ref={inputRef}
        isSelected={!!selectedOption}
        placeholder={placeholder}
        onInput={debounce(forceUpdate, 200)}
        onFocus={() => setIsDropdownOpen(true)}
        onBlur={handleBlur}
      />

      <S.Wrapper show={canShowClearButton} onClick={handleSelect()}>
        <CloseIcon size={20} />
      </S.Wrapper>

      <S.Dropdown
        ref={dropdownRef}
        open={isDropdownOpen}
        openToUp={isToUpDropdown}
      >
        {!!filteredOptions.length ? (
          filteredOptions.map(option => (
            <S.Option key={option.value} onClick={handleSelect(option)}>
              {option.label}
            </S.Option>
          ))
        ) : (
          <S.Option>Sem resultados para &quot;{value}&quot;</S.Option>
        )}
      </S.Dropdown>
    </S.Container>
  );
};

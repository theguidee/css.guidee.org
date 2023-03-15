type GenericTypeWithStyles = {
  styles?: Record<string, string | number>;
  [key: string]: unknown;
};

export enum PreviewElementTypes {
  TEXT = 'text',
  BLOCK = 'block',
  WRAPPER = 'wrapper',
}

export type PreviewContainerProps = GenericTypeWithStyles;

export type PreviewElementData = GenericTypeWithStyles & {
  isTarget?: boolean;
};

export type PreviewElement = {
  type: PreviewElementTypes;
  data?: PreviewElementData;
  children?: PreviewElement[];
};

export type PreviewElementProps = Omit<PreviewElement, 'type'>;

import { PreviewElementTypes } from 'types';

import { Text } from './text';
import { Block } from './block';
import { Wrapper } from './wrapper';

const previewElsMap = new Map<PreviewElementTypes, React.ComponentType<any>>([
  [PreviewElementTypes.TEXT, Text],
  [PreviewElementTypes.BLOCK, Block],
  [PreviewElementTypes.WRAPPER, Wrapper],
]);

export { Block, Text, previewElsMap };

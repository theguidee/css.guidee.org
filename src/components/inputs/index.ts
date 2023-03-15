import { Inputs } from 'types';

import { Range } from './range';
import { SimpleInput } from './simple-input';

const inputsMap = new Map<Inputs, React.ComponentType<any>>([
  [Inputs.RANGE, Range],
  [Inputs.TEXT, SimpleInput],
]);

export { Range, SimpleInput, inputsMap };

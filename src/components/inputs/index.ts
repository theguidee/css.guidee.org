import { Inputs } from 'types';

import { Range } from './range';
import { Select } from './select';
import { SimpleInput } from './simple-input';

const inputsMap = new Map<Inputs, React.ComponentType<any>>([
  [Inputs.RANGE, Range],
  [Inputs.SELECT, Select],
  [Inputs.TEXT, SimpleInput],
]);

export { Range, Select, SimpleInput, inputsMap };

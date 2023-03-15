import { Inputs } from 'types';

import { Range } from './range';

const inputsMap = new Map<Inputs, React.ComponentType<any>>([
  [Inputs.RANGE, Range],
]);

export { Range, inputsMap };

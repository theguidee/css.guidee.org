import {
  Inputs,
  PreviewElement,
  StylePropertyNames,
  PreviewElementTypes,
  PreviewContainerProps,
} from 'types';

type InputProps = {
  defaultValue?: string | number;
  [key: string]: unknown;
};

type Input = {
  type: Inputs;
  formater?: (value: string | number) => string;
  props?: InputProps;
};

type Preview = {
  props?: PreviewContainerProps;
  els: PreviewElement[];
};

type Example = {
  input: Input;

  preview: Preview;
};

const pxFormater = (value: number | string) => `${value}px`;

export const exemplesMap = new Map<StylePropertyNames, Example>([
  // Texts

  [
    StylePropertyNames.COLOR,
    {
      input: {
        type: Inputs.SELECT,
        props: {
          defaultValue: '#000',
          options: [
            {
              value: '#000',
              label: 'Preto',
            },
            {
              value: '#F00',
              label: 'Vermelho',
            },
            {
              value: '#0F0',
              label: 'Verde',
            },
            {
              value: '#00F',
              label: 'Azul',
            },
            {
              value: '#F0F',
              label: 'Rosa',
            },
            {
              value: 'transparent',
              label: 'Transparent',
            },
          ],
        },
      },

      preview: {
        els: [
          {
            type: PreviewElementTypes.TEXT,
          },
        ],
      },
    },
  ],

  [
    StylePropertyNames.FONT_FAMILY,
    {
      input: {
        type: Inputs.SELECT,
        props: {
          defaultValue: 'sans-serif',
          options: [
            {
              value: 'sans-serif',
              label: 'Sans Serif',
            },
            {
              value: 'serif',
              label: 'Serif',
            },
            {
              value: 'monospace',
              label: 'Monospace',
            },
            {
              value: 'system-ui',
              label: 'System UI',
            },
            {
              value: 'cursive',
              label: 'Cursive',
            },
            {
              value: 'fantasy',
              label: 'Fantasy',
            },
          ],
        },
      },

      preview: {
        els: [
          {
            type: PreviewElementTypes.TEXT,
          },
        ],
      },
    },
  ],

  [
    StylePropertyNames.FONT_SIZE,
    {
      input: {
        type: Inputs.RANGE,
        formater: pxFormater,
        props: {
          defaultValue: 16,
          max: 40,
        },
      },

      preview: {
        els: [
          {
            type: PreviewElementTypes.TEXT,
          },
        ],
      },
    },
  ],

  [
    StylePropertyNames.FONT_STYLE,
    {
      input: {
        type: Inputs.SELECT,
        props: {
          defaultValue: 'normal',
          options: [
            {
              value: 'normal',
              label: 'Normal',
            },
            {
              value: 'italic',
              label: 'Italic',
            },
            {
              value: 'oblique',
              label: 'Oblique',
            },
          ],
        },
      },

      preview: {
        els: [
          {
            type: PreviewElementTypes.TEXT,
          },
        ],
      },
    },
  ],

  [
    StylePropertyNames.FONT_WEIGHT,
    {
      input: {
        type: Inputs.SELECT,
        props: {
          defaultValue: '400',

          options: [
            {
              value: '200',
              label: '200',
            },
            {
              value: '300',
              label: '300',
            },
            {
              value: '400',
              label: '400 / regular',
            },
            {
              value: '600',
              label: '600',
            },
            {
              value: '700',
              label: '700 / bold',
            },
            {
              value: '800',
              label: '800',
            },
            {
              value: '900',
              label: '900',
            },
          ],
        },
      },

      preview: {
        els: [
          {
            type: PreviewElementTypes.TEXT,
          },
        ],
      },
    },
  ],

  [
    StylePropertyNames.LETTER_SPACING,
    {
      input: {
        type: Inputs.RANGE,
        props: {
          defaultValue: 0,

          max: 10,
          min: -15,
        },
      },

      preview: {
        els: [
          {
            type: PreviewElementTypes.TEXT,
          },
        ],
      },
    },
  ],

  [
    StylePropertyNames.LINE_HEIGHT,
    {
      input: {
        type: Inputs.RANGE,
        props: {
          defaultValue: 18,

          max: 40,
          min: -1,
        },
      },

      preview: {
        els: [
          {
            type: PreviewElementTypes.TEXT,
            data: {
              content:
                'Lorem ipsum dolor sit amet consectetur adipisicing eli dolor sit amet consectetur.',
            },
          },
        ],
      },
    },
  ],

  [
    StylePropertyNames.TEXT_ALIGN,
    {
      input: {
        type: Inputs.SELECT,
        props: {
          defaultValue: 'center',
          options: [
            {
              value: 'center',
              label: 'Center',
            },
            {
              value: 'right',
              label: 'Right',
            },
            {
              value: 'left',
              label: 'Left',
            },
            {
              value: 'end',
              label: 'End',
            },
            {
              value: 'start',
              label: 'Start',
            },
            {
              value: 'justify',
              label: 'Justify',
            },
          ],
        },
      },

      preview: {
        els: [
          {
            type: PreviewElementTypes.TEXT,
            data: {
              content:
                'Lorem ipsum dolor sit amet consectetur sit. Lorem ipsum dolor sit amet consectetur adipisicing eli consectetur sit amet.',
            },
          },
        ],
      },
    },
  ],

  [
    StylePropertyNames.TEXT_DECORATION,
    {
      input: {
        type: Inputs.SELECT,
        props: {
          defaultValue: 'none',
          options: [
            {
              value: 'underline',
              label: 'Underline',
            },
            {
              value: 'overline',
              label: 'Overline',
            },
            {
              value: 'line-through',
              label: 'Line through',
            },
            {
              value: 'none',
              label: 'None',
            },
          ],
        },
      },

      preview: {
        els: [
          {
            type: PreviewElementTypes.TEXT,
          },
        ],
      },
    },
  ],

  [
    StylePropertyNames.TEXT_TRANSFORM,
    {
      input: {
        type: Inputs.SELECT,
        props: {
          defaultValue: 'none',
          options: [
            {
              value: 'none',
              label: 'None',
            },
            {
              value: 'lowercase',
              label: 'Lowercase',
            },
            {
              value: 'uppercase',
              label: 'Uppercase',
            },
            {
              value: 'capitalize',
              label: 'Capitalize',
            },
          ],
        },
      },

      preview: {
        els: [
          {
            type: PreviewElementTypes.TEXT,
          },
        ],
      },
    },
  ],

  // Box Model

  [
    StylePropertyNames.BORDER_COLOR,
    {
      input: {
        type: Inputs.SELECT,
        props: {
          defaultValue: '#000',
          options: [
            {
              value: '#000',
              label: 'Preto',
            },
            {
              value: '#F00',
              label: 'Vermelho',
            },
            {
              value: '#0F0',
              label: 'Verde',
            },
            {
              value: '#00F',
              label: 'Azul',
            },
            {
              value: '#F0F',
              label: 'Rosa',
            },
            {
              value: 'transparent',
              label: 'Transparente',
            },
          ],
        },
      },

      preview: {
        els: [
          {
            type: PreviewElementTypes.BLOCK,
            data: {
              styles: {
                borderWidth: 5,
                borderStyle: 'solid',
                background: 'transparent',
              },
            },
          },
        ],
      },
    },
  ],

  [
    StylePropertyNames.BORDER_RADIUS,
    {
      input: {
        type: Inputs.RANGE,
        formater: pxFormater,
        props: {
          defaultValue: 4,
          max: 50,
        },
      },

      preview: {
        els: [
          {
            type: PreviewElementTypes.BLOCK,
          },
        ],
      },
    },
  ],

  [
    StylePropertyNames.BORDER_STYLE,
    {
      input: {
        type: Inputs.SELECT,
        props: {
          defaultValue: 'solid',
          options: [
            {
              value: 'solid',
              label: 'Solid',
            },
            {
              value: 'dotted',
              label: 'Dotted',
            },
            {
              value: 'dashed',
              label: 'Dashed',
            },
            {
              value: 'double',
              label: 'Double',
            },
            {
              value: 'groove',
              label: 'Groove',
            },
            {
              value: 'ridge',
              label: 'Ridge',
            },
            {
              value: 'inset',
              label: 'Inset',
            },
            {
              value: 'outset',
              label: 'Outset',
            },
          ],
        },
      },

      preview: {
        els: [
          {
            type: PreviewElementTypes.BLOCK,
            data: {
              styles: {
                background: 'transparent',
                borderWidth: 10,
              },
            },
          },
        ],
      },
    },
  ],

  [
    StylePropertyNames.BORDER_WIDTH,
    {
      input: {
        type: Inputs.RANGE,
        formater: pxFormater,
        props: {
          defaultValue: 1,
          max: 25,
        },
      },

      preview: {
        els: [
          {
            type: PreviewElementTypes.BLOCK,
            data: {
              styles: {
                background: 'transparent',
                borderStyle: 'solid',
              },
            },
          },
        ],
      },
    },
  ],

  [
    StylePropertyNames.HEIGHT,
    {
      input: {
        type: Inputs.RANGE,
        formater: pxFormater,
        props: {
          defaultValue: 5,
          max: 50,
        },
      },

      preview: {
        els: [
          {
            type: PreviewElementTypes.BLOCK,
          },
        ],
      },
    },
  ],

  [
    StylePropertyNames.MARGIN_RIGHT,
    {
      input: {
        type: Inputs.RANGE,
        formater: pxFormater,
        props: {
          defaultValue: 5,
          max: 40,
        },
      },

      preview: {
        props: {
          styles: {
            justifyContent: 'start',
          },
        },
        els: [
          {
            type: PreviewElementTypes.BLOCK,
            data: {
              isTarget: true,
            },
          },
          {
            type: PreviewElementTypes.BLOCK,
          },
        ],
      },
    },
  ],

  [
    StylePropertyNames.PADDING_LEFT,
    {
      input: {
        type: Inputs.RANGE,
        formater: pxFormater,
        props: {
          defaultValue: 5,
          max: 40,
        },
      },

      preview: {
        els: [
          {
            type: PreviewElementTypes.WRAPPER,
            data: {
              isTarget: true,
            },
            children: [
              {
                type: PreviewElementTypes.BLOCK,
              },
            ],
          },
        ],
      },
    },
  ],

  [
    StylePropertyNames.WIDTH,
    {
      input: {
        type: Inputs.RANGE,
        formater: pxFormater,
        props: {
          defaultValue: 5,
          max: 120,
        },
      },

      preview: {
        els: [
          {
            type: PreviewElementTypes.BLOCK,
          },
        ],
      },
    },
  ],

  // Background

  [
    StylePropertyNames.BACKGROUND_COLOR,
    {
      input: {
        type: Inputs.SELECT,
        props: {
          defaultValue: '#000',

          options: [
            {
              value: '#000',
              label: 'Preto',
            },
            {
              value: '#F00',
              label: 'Vermelho',
            },
            {
              value: '#0F0',
              label: 'Verde',
            },
            {
              value: '#00F',
              label: 'Azul',
            },
            {
              value: '#F0F',
              label: 'Rosa',
            },
            {
              value: 'transparent',
              label: 'Transparente',
            },
          ],
        },
      },

      preview: {
        els: [
          {
            type: PreviewElementTypes.BLOCK,
            data: {
              styles: {
                borderStyle: 'none',
              },
            },
          },
        ],
      },
    },
  ],

  [
    StylePropertyNames.BACKGROUND_IMAGE,
    {
      input: {
        type: Inputs.SELECT,
        props: {
          defaultValue: 'linear-gradient(to right, #31AEDF, #3CD3C1)',

          options: [
            {
              value: 'linear-gradient(to right, #31AEDF, #3CD3C1)',
              label: 'Linear gradiente',
            },
            {
              value: "url('/images/icon-512.png')",
              label: 'Imagem',
            },
          ],
        },
      },

      preview: {
        els: [
          {
            type: PreviewElementTypes.BLOCK,
            data: {
              styles: {
                borderStyle: 'none',
              },
            },
          },
        ],
      },
    },
  ],
]);

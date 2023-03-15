import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    .token.cdata,
    .token.comment,
    .token.doctype,
    .token.prolog {
      color: #708090;
    }

    .token.punctuation {
      color: ${theme.colors.text};
    }

    .namespace {
      opacity: 0.7;
    }

    .token.boolean,
    .token.constant,
    .token.deleted,
    .token.number,
    .token.property,
    .token.symbol,
    .token.tag {
      color: ${theme.colors.tertiary};
    }

    .token.attr-name,
    .token.builtin,
    .token.char,
    .token.inserted,
    .token.selector,
    .token.string {
      color: ${theme.colors.text};
    }

    .language-css .token.string,
    .style .token.string,
    .token.entity,
    .token.operator,
    .token.url {
      color: #a67f59;
      background: hsla(0, 0%, 100%, 0.5);
    }

    .token.atrule,
    .token.attr-value,
    .token.keyword {
      color: #07a;
    }

    .token.class-name,
    .token.function {
      color: #dd4a68;
    }

    .token.important,
    .token.regex,
    .token.variable {
      color: #e90;
    }

    .token.bold,
    .token.important {
      font-weight: 700;
    }

    .token.italic {
      font-style: italic;
    }

    .token.entity {
      cursor: help;
    }

    code,
    pre {
      color: ${theme.colors.text};
    }

    code {
    }

    pre {
      white-space: pre;
      padding: 0 1.6rem;
      background: ${theme.colors.border};
      overflow: auto;
      border-radius: ${theme.border.radius};
    }

    .language-bash .token.operator,
    .language-bash .token.function,
    .language-bash .token.builtin {
      color: #333333;
      background: none;
    }

    .language-markdown .token.title,
    .language-md .token.title {
      color: #dd4a68;
    }

    .language-markdown .token.table-header,
    .language-md .token.table-header {
      color: #07a;
    }
  `}
`;

import { css } from 'styled-components';

const Colors = {
  Primary: '#6867AC',

  Secondary: '#A267AC',

  Error: '#FF6363',

  Black: '#000000',

  Gray: '#888888',

  LightGray: '#AAAAAA',

  White: '#FFFFFF',

  IVORY: '#FCFCFC',
};

const TextStyles = {
  Paragraph1: css`
    font-size: 32px;
  `,
  Paragraph2: css`
    font-size: 26px;
  `,
  Paragraph3: css`
    font-size: 16px;
  `,
  Paragraph4: css`
    font-size: 14px;
  `,
  Paragraph5: css`
    font-size: 13px;
  `,
  Paragraph6: css`
    font-size: 12px;
  `,
  Paragraph7: css`
    font-size: 10px;
  `,
};

const Shadow = {
  BoxShadow: css`
    box-shadow: 0 4px 32px 32px rgba(0, 0, 0, 0.1);
  `,
  ButtonShadow: css`
    box-shadow: 0 4px 32px 16px rgba(0, 0, 0, 0.1);
  `,
};

const Transition = {
  ClickTransition: css`
    cursor: pointer;
    transition: 0.2s ease-out;

    :hover {
      transform: scale(0.95);
    }
  `,
};

const theme = {
  Colors,
  TextStyles,
  Shadow,
  Transition,
};

export default theme;

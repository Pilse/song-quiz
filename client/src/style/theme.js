import { css } from 'styled-components';

export const Colors = {
  Primary: '#6867AC',

  Secondary: '#A267AC',

  Error: '#FF6363',

  Black: '#000000',

  Gray: '#888888',

  LightGray: '#AAAAAA',

  DarkWhite: '#DDDDDD',

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
  TopShadow: css`
    box-shadow: 0 -10px 10px 0 rgba(0, 0, 0, 0.13);
  `,
  BottomShadow: css`
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.13);
  `,
  ListShadow: css`
    box-shadow: 0 6px 13px 0 rgba(0, 0, 0, 0.25);
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

const Scroll = {
  Default: css`
    ::-webkit-scrollbar {
      background: transparent;
      width: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.Colors.Primary};
    }
  `,
};

const theme = {
  Colors,
  TextStyles,
  Shadow,
  Transition,
  Scroll,
};

export default theme;

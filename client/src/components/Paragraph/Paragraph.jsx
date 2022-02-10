import React from 'react';
import PropTypes from 'prop-types';

import { ParagraphLayout } from './Paragraph.style';

function Paragraph({ color, textStyle, align, text, className }) {
  return (
    <ParagraphLayout {...{ color, textStyle, align }} className={className}>
      {text}
    </ParagraphLayout>
  );
}

Paragraph.propTypes = {
  color: PropTypes.string,
  textStyle: PropTypes.string,
  align: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
};

Paragraph.defaultProps = {
  color: 'Black',
  textStyle: 'Paragraph3',
  align: 'left',
  text: '',
  className: null,
};

export default Paragraph;

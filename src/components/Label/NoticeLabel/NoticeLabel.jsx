import React from 'react';
import PropTypes from 'prop-types';

import { NoticeLabelLayout } from './NoticeLabel.style';

function NoticeLabel({ text, size }) {
  return <NoticeLabelLayout {...{ size }}>{text}</NoticeLabelLayout>;
}

NoticeLabel.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default NoticeLabel;

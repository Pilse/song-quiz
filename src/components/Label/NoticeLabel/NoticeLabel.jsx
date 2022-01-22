import React from 'react';
import PropTypes from 'prop-types';

import { NoticeLabelLayout } from './NoticeLabel.style';

function NoticeLabel({ text }) {
  return <NoticeLabelLayout>{text}</NoticeLabelLayout>;
}

NoticeLabel.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NoticeLabel;

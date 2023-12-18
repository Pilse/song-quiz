import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../Icon/Icon';
import Col from '../../Layout/Col/Col';
import Paragraph from '../../Paragraph/Paragraph';

import { StyledRow } from './InfoList.style';
import isMobile from '../../../utils/window';

function InfoList({ icon, descriptions }) {
  return isMobile() ? (
    <Col align="center" padding="18px 24px" gap={32}>
      {icon && <Icon name={icon} />}

      <Col gap={16}>
        {descriptions.map(description => (
          <Paragraph textStyle="Paragraph3" text={description} />
        ))}
      </Col>
    </Col>
  ) : (
    <StyledRow align="center" padding="18px 24px" gap={32}>
      {icon && <Icon name={icon} />}

      <Col gap={16}>
        {descriptions.map(description => (
          <Paragraph textStyle="Paragraph3" text={description} />
        ))}
      </Col>
    </StyledRow>
  );
}

InfoList.propTypes = {
  icon: PropTypes.string,
  descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

InfoList.defaultProps = {
  icon: null,
};

export default InfoList;

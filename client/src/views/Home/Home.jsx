import React from 'react';
import { useNavigate } from 'react-router-dom';

import { HOME } from '../../utils/costants';

import Col from '../../components/Layout/Col/Col';
import Paragraph from '../../components/Paragraph/Paragraph';
import Icon from '../../components/Icon/Icon';

function Home() {
  const navigate = useNavigate();

  return (
    <Col width="100%" height="100%" justify="center" align="center" gap={66}>
      <Icon name="logo_large" />

      <Col justify="center" align="center" gap={43}>
        <Icon
          name="play_medium"
          clickable
          onClickHandler={() => navigate('/room')}
        />

        <Paragraph color="White" textStyle="Paragraph1" text={HOME.TITLE} />
      </Col>
    </Col>
  );
}

export default Home;

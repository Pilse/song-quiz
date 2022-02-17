import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ROOM } from '../../utils/costants';

import Icon from '../../components/Icon/Icon';
import Box from '../../components/Layout/Box/Box';
import Col from '../../components/Layout/Col/Col';
import Row from '../../components/Layout/Row/Row';
import Paragraph from '../../components/Paragraph/Paragraph';

function Room() {
  const navigate = useNavigate();

  return (
    <Col
      width="100%"
      height="100%"
      align="center"
      gap={129}
      padding="64px 0 0 0"
    >
      <Icon
        name="logo_small"
        clickable
        onClickHandler={() => navigate('/home')}
      />

      <Row width="100%" justify="center" align="center" gap={158}>
        <Box column gap={25} type="square">
          <Paragraph
            align="center"
            color="Primary"
            textStyle="Paragraph2"
            text={ROOM.CREATE}
          />

          <Icon
            name="room_create"
            clickable
            onClickHandler={() => navigate('/room/create')}
          />
        </Box>

        <Box column gap={25} type="square">
          <Paragraph
            align="center"
            color="Primary"
            textStyle="Paragraph2"
            text={ROOM.ENTER}
          />

          <Icon
            name="room_enter"
            clickable
            onClickHandler={() => navigate('/room/enter')}
          />
        </Box>
      </Row>
    </Col>
  );
}

export default Room;

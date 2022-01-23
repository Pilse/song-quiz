import React from 'react';
import { useNavigate } from 'react-router-dom';

import { HOME } from '../../utils/costants';

import Icon from '../../components/Icon/Icon';

import { HomeLayout, HomeBox, PlayParagraph } from './Home.style';

function Home() {
  const navigate = useNavigate();

  return (
    <HomeLayout>
      <Icon name="logo_large" />

      <HomeBox>
        <Icon name="play" clickable onClickHandler={() => navigate('/room')} />

        <PlayParagraph>{HOME.TITLE}</PlayParagraph>
      </HomeBox>
    </HomeLayout>
  );
}

export default Home;
